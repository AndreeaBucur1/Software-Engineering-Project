package com.fmi.washingmachine.service.implementation;

import com.fmi.washingmachine.entity.User;
import com.fmi.washingmachine.repository.UserRepository;
import com.fmi.washingmachine.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User register(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User login(User user) {
        User user1 = userRepository.findByEmail(user.getEmail()).orElse(null);
        if(user1 != null){
            if(user.getPassword().compareTo(user1.getPassword()) == 0){
                return user1;
            }
        }
        return null;
    }
}
