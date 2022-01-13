package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.WashingMachine;
import com.fmi.washingmachine.entity.WashingProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WashingProgramRepository extends JpaRepository<WashingProgram, String> {
    WashingProgram findByProgramName(String programName);
}
