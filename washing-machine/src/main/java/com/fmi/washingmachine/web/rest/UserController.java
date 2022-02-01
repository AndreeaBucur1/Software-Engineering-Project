package com.fmi.washingmachine.web.rest;

import com.fmi.washingmachine.entity.User;
import com.fmi.washingmachine.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3001")
    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @CrossOrigin(origins = "http://localhost:3001")
    @PostMapping("/login")
    public User login(@RequestBody() User user) {
        return userService.login(user);
    }




}
