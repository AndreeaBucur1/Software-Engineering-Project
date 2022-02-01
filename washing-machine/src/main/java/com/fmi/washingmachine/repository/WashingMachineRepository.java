package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.User;
import com.fmi.washingmachine.entity.WashingMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WashingMachineRepository extends JpaRepository<WashingMachine, Long> {
    List<WashingMachine> findAllByUser(User user);
}
