package com.funfacts.factsapp.services;

import com.funfacts.factsapp.dto.LoginDto;
import com.funfacts.factsapp.dto.UserDetailsDto;
import org.springframework.stereotype.Service;

public interface LoginService {
  UserDetailsDto login(LoginDto loginDto);
}
