package com.fmi.washingmachine.service;

import com.fmi.washingmachine.entity.ErrorCode;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.entity.WashingProgram;
import com.fmi.washingmachine.web.rest.dtos.StartWashDTO;

import java.util.List;

public interface WashingMachineService {
    WashingMachine addWashingMachine();

    List<WashingMachine> getAllWashingMachines(Long userId);

    WashingMachine addWashingMachineToApp(Long userId, WashingMachine washingMachine);

    ErrorCode scanItems(StartWashDTO startWashDTO);

    WashingProgram chooseProgram(StartWashDTO startWashDTO);

    ErrorCode startProgram(Long washingMachineId, String programId);

    void addDetergent(Long quantity, Long washingMachineId);

}



