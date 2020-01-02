package com.funfacts.factsapp.services;

import com.funfacts.factsapp.dao.UserDao;
import com.funfacts.factsapp.dto.RegisterDto;
import com.funfacts.factsapp.dto.UserDetailsDto;

public interface RegistrationService {
  UserDetailsDto registerUser(RegisterDto registerDto);
}
