package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.entity.WashingMachine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    ArrayList<Notification> findAllByWashingMachine(WashingMachine washingMachine);
}
