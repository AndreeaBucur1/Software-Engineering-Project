package com.fmi.washingmachine.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class ErrorCode {

    @Id
    @GeneratedValue
    public String errorId;

    @Column
    public String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ErrorCode errorCode = (ErrorCode) o;
        return Objects.equals(errorId, errorCode.errorId) && Objects.equals(description, errorCode.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(errorId, description);
    }

    public ErrorCode() {
    }

    public ErrorCode(String errorId, String description) {
        this.errorId = errorId;
        this.description = description;
    }
}
