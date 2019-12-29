package com.funfacts.factsapp.controllers;

import com.funfacts.factsapp.dto.RegisterDto;
import com.funfacts.factsapp.entities.User;
import com.funfacts.factsapp.services.JwtService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  final private JwtService jwtService;

  public AuthController(final JwtService jwtService) {
    this.jwtService = jwtService;
  }

  @PostMapping("/login")
  public User login() {
    return null;
  }

  @PostMapping("/register")
  public User register(@RequestBody RegisterDto registerDto) {
    return null;
  }
}
