package com.fmi.washingmachine.web.rest;

import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RequestMapping("/notifications")
@RestController
public class NotificationController {

    @Autowired
    NotificationService notificationService;

    @CrossOrigin
    @GetMapping("/washing-machine-id/{washingMachineId}")
    private ArrayList<Notification> getNotifications(@PathVariable("washingMachineId") Long washingMachineId) {
        return notificationService.getNotificationsByWashingMachineId(washingMachineId);
    }
}
