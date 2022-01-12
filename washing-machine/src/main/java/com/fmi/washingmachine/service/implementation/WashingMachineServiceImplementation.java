package com.fmi.washingmachine.service.implementation;

import com.fmi.washingmachine.entity.User;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.repository.UserRepository;
import com.fmi.washingmachine.repository.WachingMachineRepository;
import com.fmi.washingmachine.service.UserService;
import com.fmi.washingmachine.service.WashingMachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WashingMachineServiceImplementation implements WashingMachineService {

    @Autowired
    WachingMachineRepository wachingMachineRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Override
    public WashingMachine addWashingMachine(Long userId, WashingMachine washingMachine) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            washingMachine.setUser(user);
            return wachingMachineRepository.save(washingMachine);
        }
        else{
            return null;
        }
    }

    @Override
    public List<WashingMachine> getAllWashingMachines() {
        return wachingMachineRepository.findAll();
    }
}
