package com.fmi.washingmachine.web.rest.dtos;

public class Item {

    private String fabric;

    private String color;

    public String getFabric() {
        return fabric;
    }

    public void setFabric(String fabric) {
        this.fabric = fabric;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Item() {
    }

    @Override
    public String toString() {
        return "Items{" +
                "fabric='" + fabric + '\'' +
                ", color='" + color + '\'' +
                '}';
    }

    public Item(String fabric, String color) {
        this.fabric = fabric;
        this.color = color;
    }
}
