package com.fmi.washingmachine.entity;

import javax.persistence.*;

@Entity
@Table
public class WashingProgram {

    @Id
    @GeneratedValue
    private String programName;

    @Column
    private Long time;

    @Column
    private Long spinSpeed;

    @Column
    private Long temperature;

    @Column
    private Long detergentQuantity;

    @Override
    public String toString() {
        return "WashingProgram{" +
                "programName='" + programName + '\'' +
                ", time=" + time +
                ", spinSpeed=" + spinSpeed +
                ", temperature=" + temperature +
                ", detergentQuantity=" + detergentQuantity +
                '}';
    }

    public WashingProgram(String programName, Long time, Long spinSpeed, Long temperature, Long detergentQuantity) {
        this.programName = programName;
        this.time = time;
        this.spinSpeed = spinSpeed;
        this.temperature = temperature;
        this.detergentQuantity = detergentQuantity;
    }

    public WashingProgram() {
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public Long getSpinSpeed() {
        return spinSpeed;
    }

    public void setSpinSpeed(Long spinSpeed) {
        this.spinSpeed = spinSpeed;
    }

    public Long getTemperature() {
        return temperature;
    }

    public void setTemperature(Long temperature) {
        this.temperature = temperature;
    }

    public Long getDetergentQuantity() {
        return detergentQuantity;
    }

    public void setDetergentQuantity(Long detergentQuantity) {
        this.detergentQuantity = detergentQuantity;
    }
}
