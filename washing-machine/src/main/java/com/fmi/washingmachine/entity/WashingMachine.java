package com.fmi.washingmachine.entity;

import javax.persistence.*;

@Entity
@Table(name = "washing_machine")
public class WashingMachine {

    @Id
    @GeneratedValue
    @Column(name = "id", insertable=false, updatable=false)
    private Long washingMachineId;

    @Column
    private Long detergentQuantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private  User user;

    public Long getDetergentQuantity() {
        return detergentQuantity;
    }

    public void setDetergentQuantity(Long detergentQuantity) {
        this.detergentQuantity = detergentQuantity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getWashingMachineId() {
        return washingMachineId;
    }

    public void setWashingMachineId(Long id) {
        this.washingMachineId = id;
    }



    public WashingMachine(Long washingMachineId, User user) {
        this.washingMachineId = washingMachineId;
        this.user = user;
    }

    public WashingMachine() {

    }
}
