package com.fmi.washingmachine.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ErrorCode {

    @Id
    @GeneratedValue
    public String errorId;

    @Column
    public String description;
}
