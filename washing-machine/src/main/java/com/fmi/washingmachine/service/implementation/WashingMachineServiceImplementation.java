package com.fmi.washingmachine.service.implementation;

import com.fmi.washingmachine.MQTT.WashingMachineMQTT;
import com.fmi.washingmachine.entity.ErrorCode;
import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.entity.WashingProgram;
import com.fmi.washingmachine.repository.*;
import com.fmi.washingmachine.service.UserService;
import com.fmi.washingmachine.service.WashingMachineService;
import com.fmi.washingmachine.web.rest.dtos.Item;
import com.fmi.washingmachine.web.rest.dtos.StartWashDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WashingMachineServiceImplementation implements WashingMachineService {

    @Autowired
    WashingMachineRepository washingMachineRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    NotificationRepository notificationRepository;

    @Autowired
    WashingProgramRepository washingProgramRepository;

    @Autowired
    ErrorCodeRepository errorCodeRepository;

    @Override
    public WashingMachine addWashingMachine() {
        return washingMachineRepository.save(new WashingMachine());
    }

    @Override
    public List<WashingMachine> getAllWashingMachines() {
        return washingMachineRepository.findAll();
    }

    @Override
    public WashingMachine addWashingMachineToApp(Long userId, WashingMachine washingMachine) {
        washingMachine.setUser(userRepository.findById(userId).orElse(null));
        return washingMachineRepository.save(washingMachine);
    }

    @Override
    public WashingProgram chooseProgram(StartWashDTO startWashDTO) {

        System.out.println(startWashDTO);
        ArrayList<Item> items = startWashDTO.getItems();

        ArrayList<String>  fabrics =  new ArrayList<>();
        for(Item item:items){
            fabrics.add(item.getFabric());
        }
        if(fabrics.get(0).compareTo("silk") == 0){
            return washingProgramRepository.findByProgramName("delicates");
        }
        return washingProgramRepository.findByProgramName(fabrics.get(0) + startWashDTO.getSoilLevel());

    }

    @Override
    public ErrorCode startProgram(Long washingMachineId, String programName) {
        WashingMachine washingMachine = washingMachineRepository.findById(washingMachineId).orElse(null);
        if(washingMachine != null) {
            WashingProgram washingProgram = washingProgramRepository.findByProgramName(programName);
            if(washingProgram != null) {
                if(washingProgram.getDetergentQuantity() > washingMachine.getDetergentQuantity()){
                    Notification notification = new Notification("Not enough detergent. Please refill",new Date(),washingMachine);
                    notificationRepository.save(notification);
                    return errorCodeRepository.findById("Err5").orElse(null);
                }
                else{
                    Notification startNotification = new Notification("Washing program started",new Date(),washingMachine);
                    notificationRepository.save(startNotification);
                    washingMachine.setDetergentQuantity(washingMachine.getDetergentQuantity()-washingProgram.getDetergentQuantity());
                    washingMachineRepository.save(washingMachine);
                    WashingMachineMQTT w1 = new WashingMachineMQTT();
                    w1.mqtt(washingMachine, washingProgram.getTime(), notificationRepository);

                }
            }
        }

        return null;
    }

    @Override
    public void addDetergent(Long quantity, Long washingMachineId) {
        WashingMachine washingMachine = washingMachineRepository.findById(washingMachineId).orElse(null);
        if(washingMachine != null) {
            washingMachine.setDetergentQuantity(washingMachine.getDetergentQuantity() + quantity);
        }
    }

    @Override
    public ErrorCode scanItems(StartWashDTO startWashDTO) {
        if(scanFabricsAndColors(startWashDTO.getItems()) != null){
            return scanFabricsAndColors(startWashDTO.getItems());
        }
        if(checkWeight(startWashDTO.getWeight()) != null){
            return checkWeight(startWashDTO.getWeight());
        }
        return null;
    }



    private ErrorCode checkWeight(Float weight) {
        if(weight > 10){
            return errorCodeRepository.findById("Err3").orElse(null);
        }
        return null;
    }

    public ErrorCode scanFabricsAndColors(ArrayList<Item> fabricsAndColors){
        ArrayList<String> fabrics = new ArrayList<>();
        ArrayList<String> colors = new ArrayList<>();
        for(Item item:fabricsAndColors){
            fabrics.add(item.getFabric());
            colors.add(item.getColor());
        }
        if(canColorsBeWashedTogether(colors) == false){
            return errorCodeRepository.findById("Err1").orElse(null);
        }
        if(canFabricsBeWashedTogether(fabrics) == false){
            return errorCodeRepository.findById("Err2").orElse(null);
        }
        if(checkIfFabricsCanBeWashed(fabrics) == false){
            return errorCodeRepository.findById("Err4").orElse(null);
        }


        return null;
    }

    private boolean checkIfFabricsCanBeWashed(ArrayList<String> fabrics) {
        for(int i = 0; i < fabrics.size() - 1; i++){
            if(fabrics.get(i).compareTo("leather") == 0 || fabrics.get(i).compareTo("fur") == 0){
                return false;
            }
        }
        return true;
    }

    public boolean canColorsBeWashedTogether(ArrayList<String> colors) {
        ArrayList<String> category1 = new ArrayList<>(Arrays.asList("white", "alabaster", "antique white", "baby blue", "beige", "blanche almond", "canary", "champagne"));
        ArrayList<String> category2 = new ArrayList<>(Arrays.asList("orange", "yellow", "red", "amaranth", "barn red", "brown", "carmine", "crimson"));
        ArrayList<String> category3 = new ArrayList<>(Arrays.asList("blank", "charcoal", "coffee", "dark green", "dark sienna", "blue", "eigengrau", "purple"));
        boolean cat1 = false, cat2 = false, cat3 = false;
        for (String color : colors) {
            if (category1.contains(color)) {
                cat1 = true;
            } else if (category2.contains(color)) {
                cat2 = true;
            } else if (category3.contains(color)) {
                cat3 = true;
            }
        }
        Integer nrOfCategories = 0;
        if (cat1) nrOfCategories++;
        if (cat2) nrOfCategories++;
        if (cat3) nrOfCategories++;
        if (nrOfCategories > 1) {
            return false;
        }
        return true;
    }
    
    public boolean canFabricsBeWashedTogether(ArrayList<String> fabrics){

        for(int i = 0; i < fabrics.size() - 1; i++){
            if(fabrics.get(i).compareTo(fabrics.get(i+1)) != 0){
                return false;
            }
        }
        return true;
    }}
