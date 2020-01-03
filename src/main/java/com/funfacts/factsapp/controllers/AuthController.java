package com.funfacts.factsapp.controllers;

import com.funfacts.factsapp.dto.LoginDto;
import com.funfacts.factsapp.dto.RegisterDto;
import com.funfacts.factsapp.dto.UserDetailsDto;
import com.funfacts.factsapp.entities.User;
import com.funfacts.factsapp.services.JwtService;
import com.funfacts.factsapp.services.LoginService;
import com.funfacts.factsapp.services.RegistrationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  final private RegistrationService registrationService;
  final private LoginService loginService;

  public AuthController(final RegistrationService registrationService, final LoginService loginService) {
    this.registrationService = registrationService;
    this.loginService = loginService;
  }

  @PostMapping("/login")
  public UserDetailsDto login(@RequestBody LoginDto loginDto) {
    UserDetailsDto userDetails = loginService.login(loginDto);
    return userDetails;
  }

  @PostMapping("/register")
  public UserDetailsDto register(@RequestBody RegisterDto registerDto) {
    UserDetailsDto userDetails = registrationService.registerUser(registerDto);
    return userDetails;
  }
}
