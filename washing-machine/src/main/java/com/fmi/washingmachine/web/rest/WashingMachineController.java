package com.fmi.washingmachine.web.rest;

import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.service.WashingMachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/washing-machines")
public class WashingMachineController {

    @Autowired
    WashingMachineService washingMachineService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-washing-machine/userId/{userId}")
    public WashingMachine addWashingMachine(@PathVariable("userId") Long userId, @RequestBody WashingMachine washingMachine){
        return washingMachineService.addWashingMachine(userId, washingMachine);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public List<WashingMachine> getAllWashingMachines(){
        return washingMachineService.getAllWashingMachines();
    }


}
