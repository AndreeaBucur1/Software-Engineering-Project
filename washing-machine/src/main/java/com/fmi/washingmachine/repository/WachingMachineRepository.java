package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.WashingMachine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WachingMachineRepository extends JpaRepository<WashingMachine, Long> {

}
