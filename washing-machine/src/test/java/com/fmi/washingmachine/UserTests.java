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

public class UserTests {

    @Test
    public void test_getUsersStatus() {
        given()

                .when()
                .get("http://localhost:8081/users")

                .then()
                .statusCode(200);

    }

    @Test
    public void test_checkUserBody() {

            Response response = given()
                    .contentType(ContentType.JSON)
                    .when()
                    .get("http://localhost:8081/users")
                    .then()
                    .extract().response();

        String responseBody = response.getBody().asString();
        System.out.println(responseBody);
        Assertions.assertTrue(responseBody!=null);
    }

    @Test
    public void test_checkUserResponseTime() {

        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:8081/users")
                .then()
                .extract().response();

        long responseTime = response.getTime();
        System.out.println(responseTime);
        if(responseTime>2000)
            System.out.println("Response Time is greater than 2000");
        Assertions.assertTrue(responseTime<2000);
    }

    @Test
    public void test_postUserStatus() {

        HashMap data = new HashMap();
        data.put("email","test2@email.com");
        data.put("password","testparola");

        given()
                .contentType("application/json")
                .body(data)
        .when()
                .post("http://localhost:8081/users/register")

        .then()
                .statusCode(200);

    }


    @Test
    public void test_checkContentType() {

        Response response = given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:8081/users")
                .then()
                .extract().response();

        String contentType = response.header("Content-Type");
        System.out.println(contentType);
        Assertions.assertEquals(contentType,"application/json");

    }


}
