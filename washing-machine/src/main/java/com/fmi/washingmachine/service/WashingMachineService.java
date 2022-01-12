package com.fmi.washingmachine.service;

import com.fmi.washingmachine.entity.WashingMachine;

import java.util.List;

public interface WashingMachineService {
    WashingMachine addWashingMachine(Long userId, WashingMachine washingMachine);

    List<WashingMachine> getAllWashingMachines();
}
