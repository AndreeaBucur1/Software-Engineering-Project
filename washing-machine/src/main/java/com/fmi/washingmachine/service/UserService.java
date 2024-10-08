package com.fmi.washingmachine.service;

import com.fmi.washingmachine.entity.User;

import java.util.List;

public interface UserService {
    User register(User user);

    List<User> getUsers();

    User login(User user);

}

