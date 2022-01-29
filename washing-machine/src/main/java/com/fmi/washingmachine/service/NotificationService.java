package com.fmi.washingmachine.service;

import com.fmi.washingmachine.entity.Notification;

import java.util.ArrayList;

public interface NotificationService {
    ArrayList<Notification> getNotificationsByWashingMachineId(Long washingMachineId);

}
