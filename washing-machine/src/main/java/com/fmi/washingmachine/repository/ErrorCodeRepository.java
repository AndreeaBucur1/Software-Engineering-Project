package com.fmi.washingmachine.repository;

import com.fmi.washingmachine.entity.ErrorCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ErrorCodeRepository extends JpaRepository<ErrorCode, String> {
}
