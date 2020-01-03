package com.funfacts.factsapp.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.funfacts.factsapp.dao.UserDao;
import com.funfacts.factsapp.dto.RegisterDto;
import com.funfacts.factsapp.dto.UserDetailsDto;
import com.funfacts.factsapp.entities.User;
import com.funfacts.factsapp.services.JwtService;
import com.funfacts.factsapp.services.RegistrationService;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImpl implements RegistrationService {
  final private UserDao userDao;
  final private JwtService jwtService;

  public RegistrationServiceImpl(final UserDao userDao, final JwtService jwtService) {
    this.userDao = userDao;
    this.jwtService = jwtService;
  }

  @Override
  public UserDetailsDto registerUser(RegisterDto registerDto) {
    User newUser = registerDto.mapToUserEntity();
    userDao.createOrUpdateUser(newUser);

    String jwt = jwtService.createJWT(newUser.getUsername());

    UserDetailsDto userDetails = new UserDetailsDto(newUser);
    userDetails.setJwt(jwt);

    return userDetails;
  }
}
