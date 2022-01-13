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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-washing-machine")
    public WashingMachine addWashingMachine(){
        return washingMachineService.addWashingMachine();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public List<WashingMachine> getAllWashingMachines(){
        return washingMachineService.getAllWashingMachines();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-washing-machine/userId/{userId}")
    public WashingMachine addWashingMachineToApp(@PathVariable("userId") Long userId, @RequestBody() WashingMachine washingMachine){
        return washingMachineService.addWashingMachineToApp(userId, washingMachine);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/scan-items")
    public ErrorCode scanItems(@RequestBody()StartWashDTO startWashDTO){
        System.out.println(startWashDTO);
        return washingMachineService.scanItems(startWashDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/start-program")
    public WashingProgram chooseProgram(@RequestBody() StartWashDTO startWashDTO){
        return washingMachineService.chooseProgram(startWashDTO);
    }
}
