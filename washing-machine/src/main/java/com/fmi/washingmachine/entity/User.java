package com.fmi.washingmachine.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id", insertable=false, updatable=false)
    private Long userId;

    @Column
    private String email;

    @Column
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<WashingMachine> washingMachines;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User() {
    }

    public User(Long userId, String email, String password, List<WashingMachine> washingMachines) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.washingMachines = washingMachines;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long id) {
        this.userId = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<WashingMachine> getWashingMachines() {
        return washingMachines;
    }

    public void setWashingMachines(List<WashingMachine> washingMachines) {
        this.washingMachines = washingMachines;
    }
}
