package com.fmi.washingmachine.web.rest;

import com.fmi.washingmachine.entity.ErrorCode;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.entity.WashingProgram;
import com.fmi.washingmachine.service.WashingMachineService;
import com.fmi.washingmachine.web.rest.dtos.StartWashDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/washing-machines")
public class WashingMachineController {

    @Autowired
    WashingMachineService washingMachineService;

    @CrossOrigin
    @PostMapping("/add-washing-machine")
    public WashingMachine addWashingMachine(){
        return washingMachineService.addWashingMachine();
    }

    @CrossOrigin
    @GetMapping("/{userId}")
    public List<WashingMachine> getAllWashingMachines(@PathVariable("userId") Long userId){
        return washingMachineService.getAllWashingMachines(userId);
    }

    @CrossOrigin
    @PostMapping("/add-washing-machine/userId/{userId}")
    public WashingMachine addWashingMachineToApp(@PathVariable("userId") Long userId, @RequestBody() WashingMachine washingMachine){
        return washingMachineService.addWashingMachineToApp(userId, washingMachine);
    }

    @CrossOrigin
    @PostMapping("/scan-items")
    public ErrorCode scanItems(@RequestBody()StartWashDTO startWashDTO){
        System.out.println(startWashDTO);
        return washingMachineService.scanItems(startWashDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/choose-program")
    public WashingProgram chooseProgram(@RequestBody() StartWashDTO startWashDTO){
        return washingMachineService.chooseProgram(startWashDTO);
    }

    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
    @PostMapping("/start-program/{washingMachineId}/program/{programName}")
    public ErrorCode startProgram(@PathVariable("washingMachineId") Long washingMachineId, @PathVariable("programName") String programId ) {
        return washingMachineService.startProgram(washingMachineId, programId);
    }

    @CrossOrigin
    @PostMapping("/add-detergent/{washingMachineId}")
    public void addDetergent(@RequestBody() Long quantity, @PathVariable("washingMachineId") Long washingMachineId) {
        washingMachineService.addDetergent(quantity,washingMachineId);
    }



}
