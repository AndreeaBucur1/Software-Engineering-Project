package com.fmi.washingmachine.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "notification")
public class Notification {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String description;

    @Column
    private Date date;

    @ManyToOne
    @JoinColumn(name = "washing_machine_id")
    private  WashingMachine washingMachine;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Notification(String description, Date date, WashingMachine washingMachine) {
        this.description = description;
        this.date = date;
        this.washingMachine = washingMachine;
    }

    public Notification() {
    }
}
