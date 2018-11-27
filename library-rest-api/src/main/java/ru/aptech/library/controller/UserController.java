package ru.aptech.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import ru.aptech.library.dto.UserDto;
import ru.aptech.library.entities.User;
import ru.aptech.library.service.impl.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/getCurrentUser")
    public User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userService.findUserByEmail(auth.getName());
    }

    @PostMapping("/registration")
    public UserDto createNewUser(@Valid User user, BindingResult bindingResult) {
        UserDto userDto = new UserDto();
        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            userDto.getErrors().add("There is already a user registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors();
            for (ObjectError error : bindingResult.getAllErrors()) {
                userDto.getErrors().add(String.format("Not valid User: %s", error.getObjectName()));
            }
        } else {
            userService.saveUser(user);
            userDto.setUser(user);
        }
        return userDto;
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        User userExists = userService.findUserByEmail(user.getEmail());
        if(userExists != null && userService.comparePasswords(user.getPassword(), userExists.getPassword())){
            userExists.setPassword(null);
            return  userExists;
        }
        return null;
    }
}
