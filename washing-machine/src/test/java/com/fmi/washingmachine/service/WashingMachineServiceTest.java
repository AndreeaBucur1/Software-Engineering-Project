package com.fmi.washingmachine.service;

import com.fmi.washingmachine.entity.ErrorCode;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.entity.WashingProgram;
import com.fmi.washingmachine.repository.ErrorCodeRepository;
import com.fmi.washingmachine.repository.NotificationRepository;
import com.fmi.washingmachine.repository.WashingMachineRepository;
import com.fmi.washingmachine.repository.WashingProgramRepository;
import com.fmi.washingmachine.service.implementation.WashingMachineServiceImplementation;
import com.fmi.washingmachine.web.rest.dtos.Item;
import com.fmi.washingmachine.web.rest.dtos.StartWashDTO;
import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class WashingMachineServiceTest {

    @InjectMocks
    private WashingMachineServiceImplementation washingMachineService = new WashingMachineServiceImplementation();

    @Mock
    ErrorCodeRepository errorCodeRepository;

    @Mock
    WashingMachineRepository washingMachineRepository;

    @Mock
    WashingProgramRepository washingProgramRepository;

    @Mock
    NotificationRepository notificationRepository;

    @Test
    public void test_scanItemsReturnsNull() {
        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("cotton", "red");
        items.add(item);
        item = new Item("cotton", "red");
        items.add(item);
        Float weight = 10.f;
        Integer soilLevel = 2;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);
        Assert.assertNull(washingMachineService.scanItems(startWashDTO));

    }

    @Test
    public void test_scanItemsReturnsTooMuchWeight() {

        MockitoAnnotations.initMocks(this);


        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("cotton", "red");
        items.add(item);
        item = new Item("cotton", "red");
        items.add(item);
        Float weight = 15.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);
        ErrorCode errorCode = new ErrorCode("Err3", "Too much weight");
        when(errorCodeRepository.findById("Err3")).thenReturn(java.util.Optional.of(errorCode));
        Assertions.assertEquals(washingMachineService.scanItems(startWashDTO), errorCode);

    }

    @Test
    public void test_scanItemsReturnsColoursDoNotMatch() {

        MockitoAnnotations.initMocks(this);


        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("cotton", "red");
        items.add(item);
        item = new Item("cotton", "white");
        items.add(item);
        Float weight = 5.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);
        ErrorCode errorCode = new ErrorCode("Err1", "Colors do not match");
        when(errorCodeRepository.findById("Err1")).thenReturn(java.util.Optional.of(errorCode));
        Assertions.assertEquals(washingMachineService.scanItems(startWashDTO), errorCode);

    }

    @Test
    public void test_scanItemsReturnsFabricsDoNotMatch() {
        MockitoAnnotations.initMocks(this);


        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("wool", "red");
        items.add(item);
        item = new Item("cotton", "red");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);
        ErrorCode errorCode = new ErrorCode("Err2", "Fabrics do not match");
        when(errorCodeRepository.findById("Err2")).thenReturn(java.util.Optional.of(errorCode));
        Assertions.assertEquals(errorCode, washingMachineService.scanItems(startWashDTO));

    }

    @Test
    public void test_scanItemsReturnsThisShouldOnlyBeWashedByHand() {
        MockitoAnnotations.initMocks(this);


        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("leather", "red");
        items.add(item);
        item = new Item("leather", "red");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);
        ErrorCode errorCode = new ErrorCode("Err4", "This should only be washed by hand");
        when(errorCodeRepository.findById("Err4")).thenReturn(java.util.Optional.of(errorCode));
        Assertions.assertEquals(errorCode, washingMachineService.scanItems(startWashDTO));

    }


    @Test
    public void test_scanItemsReturnsNotEnoughDetergent() {
        MockitoAnnotations.initMocks(this);

        WashingMachine washingMachine = new WashingMachine(new Long(101), new Long(0));
        ErrorCode errorCode = new ErrorCode("Err5", "Not enough detergent in the reservoir");
        WashingProgram washingProgram = new WashingProgram("wool1", new Long(40), new Long(400), new Long(20), new Long(160));
        when(washingMachineRepository.findById(101L)).thenReturn(java.util.Optional.of(washingMachine));
        when(washingProgramRepository.findByProgramName("wool1")).thenReturn(washingProgram);
        when(errorCodeRepository.findById("Err5")).thenReturn(java.util.Optional.of(errorCode));
        when(notificationRepository.save(any())).thenReturn(null);
        Assertions.assertEquals(errorCode, washingMachineService.startProgram(washingMachine.getWashingMachineId(), washingProgram.getProgramName()));

    }

    @Test
    public void test_chooseProgramReturnsNull() {
        MockitoAnnotations.initMocks(this);

        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("silk", "red");
        items.add(item);
        item = new Item("silk", "red");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);

        WashingProgram washingProgram = new WashingProgram("delicates", new Long(30), new Long(400), new Long(30), new Long(120));
        when(washingProgramRepository.findByProgramName("delicates")).thenReturn(washingProgram);

        Assertions.assertEquals(washingProgram, washingMachineService.chooseProgram(startWashDTO));
    }

    @Test
    public void test_chooseProgramReturnsWoolProgram() {
        MockitoAnnotations.initMocks(this);

        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("wool", "red");
        items.add(item);
        item = new Item("wool", "red");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 3;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);

        WashingProgram washingProgram = new WashingProgram("wool3", new Long(40), new Long(400), new Long(30), new Long(160));
        when(washingProgramRepository.findByProgramName("wool3")).thenReturn(washingProgram);

        Assertions.assertEquals(washingProgram, washingMachineService.chooseProgram(startWashDTO));
    }

    @Test
    public void test_chooseProgramReturnsDenimProgram() {
        MockitoAnnotations.initMocks(this);

        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("denim", "blue");
        items.add(item);
        item = new Item("denim", "blue");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 1;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);

        WashingProgram washingProgram = new WashingProgram("denim1", new Long(30), new Long(400), new Long(30), new Long(100));
        when(washingProgramRepository.findByProgramName("denim1")).thenReturn(washingProgram);

        Assertions.assertEquals(washingProgram, washingMachineService.chooseProgram(startWashDTO));
    }

    @Test
    public void test_chooseProgramReturnsTowelsProgram() {
        MockitoAnnotations.initMocks(this);

        ArrayList<Item> items = new ArrayList<Item>();
        Item item = new Item("towels", "blue");
        items.add(item);
        item = new Item("towels", "blue");
        items.add(item);
        Float weight = 3.f;
        Integer soilLevel = 2;
        StartWashDTO startWashDTO = new StartWashDTO(items, weight, soilLevel);

        WashingProgram washingProgram = new WashingProgram("towels2", new Long(40), new Long(1200), new Long(50), new Long(140));
        when(washingProgramRepository.findByProgramName("towels2")).thenReturn(washingProgram);

        Assertions.assertEquals(washingProgram, washingMachineService.chooseProgram(startWashDTO));
    }

}


