package com.fmi.washingmachine.service.implementation;

import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.repository.NotificationRepository;
import com.fmi.washingmachine.repository.WashingMachineRepository;
import com.fmi.washingmachine.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class NotificationServiceImplementation implements NotificationService {

    @Autowired
    NotificationRepository notificationRepository;

    @Autowired
    WashingMachineRepository washingMachineRepository;

    @Override
    public ArrayList<Notification> getNotificationsByWashingMachineId(Long washingMachineId) {

        WashingMachine washingMachine = washingMachineRepository.findById(washingMachineId).orElse(null);
        return notificationRepository.findAllByWashingMachine(washingMachine);
    }
}
