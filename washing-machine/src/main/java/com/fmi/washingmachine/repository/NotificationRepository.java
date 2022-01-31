package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.Notification;
import com.fmi.washingmachine.entity.WashingMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    ArrayList<Notification> findAllByWashingMachine(WashingMachine washingMachine);
}
