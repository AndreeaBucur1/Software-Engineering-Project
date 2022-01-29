package com.fmi.washingmachine;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.jupiter.api.Assertions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.HashMap;

public class WashingMachineTests {

    @Test
    public void test_getWashingMachineStatus() {
        given()

                .when()
                .get("http://localhost:8081/washing-machines")

                .then()
                .statusCode(200);

    }

    @Test
    public void test_checkWashingMachineBody() {

        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:8081/washing-machines")
                .then()
                .extract().response();

        String responseBody = response.getBody().asString();
        System.out.println(responseBody);
        Assertions.assertTrue(responseBody!=null);
    }

    @Test
    public void test_checkWashingMachineResponseTime() {

        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:8081/waching-machines")
                .then()
                .extract().response();

        long responseTime = response.getTime();
        System.out.println(responseTime);
        if(responseTime>2000)
            System.out.println("Response Time is greater than 2000");
        Assertions.assertTrue(responseTime<2000);
    }

    @Test
    public void test_postWashingMachineStatus() {

        HashMap data = new HashMap();
        data.put("detergentQuantity","500");
        given()
                .contentType("application/json")
                .body(data)
                .when()
                .post("http://localhost:8081/washing-machines/add-washing-machine/userId/10")

                .then()
                .statusCode(200);

    }

    @Test
    public void test_checkContentType() {

        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:8081/waching-machines")
                .then()
                .extract().response();

        String contentType = response.header("Content-Type");
        System.out.println(contentType);
        Assertions.assertEquals(contentType,"application/json");

    }


}