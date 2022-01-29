package com.fmi.washingmachine.web.rest.dtos;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class StartWashDTO {

    private ArrayList<Items> items;

    private Float weight;

    private Integer soilLevel;


    public ArrayList<Items> getItems() {
        return items;
    }

    public StartWashDTO(ArrayList<Items> items, Float weight, Integer soilLevel) {
        this.items = items;
        this.weight = weight;
        this.soilLevel = soilLevel;
    }

    public void setItems(ArrayList<Items> items) {
        this.items = items;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public Integer getSoilLevel() {
        return soilLevel;
    }

    public void setSoilLevel(Integer soilLevel) {
        this.soilLevel = soilLevel;
    }

    @Override
    public String toString() {
        return "StartWashDTO{" +
                "items=" + items +
                ", weight=" + weight +
                ", soilLevel=" + soilLevel +
                '}';
    }
}
