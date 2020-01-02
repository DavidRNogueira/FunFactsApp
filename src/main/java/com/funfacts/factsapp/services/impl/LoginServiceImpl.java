package com.funfacts.factsapp.services.impl;

import com.funfacts.factsapp.dao.UserDao;
import com.funfacts.factsapp.dto.LoginDto;
import com.funfacts.factsapp.dto.UserDetailsDto;
import com.funfacts.factsapp.entities.User;
import com.funfacts.factsapp.services.JwtService;
import com.funfacts.factsapp.services.LoginService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
  final private UserDao userDao;
  final private JwtService jwtService;

  public LoginServiceImpl(final UserDao userDao, final JwtService jwtService) {
    this.userDao = userDao;
    this.jwtService = jwtService;
  }

  @Override
  public UserDetailsDto login(LoginDto loginDto) {
    User user = userDao.getUserByUsername(loginDto.getUsername());

    if (!verifyPassword(loginDto.getPassword(), user.getPassword())) {
      return null;
    }

    UserDetailsDto userDetails = new UserDetailsDto(user);
    String jwt = jwtService.createJWT(loginDto.getUsername());
    userDetails.setJwt(jwt);

    return userDetails;
  }

  private Boolean verifyPassword(String passAttempt, String passInDb) {
    Boolean doesMatch = new BCryptPasswordEncoder().matches(passAttempt, passInDb);
    return doesMatch;
  }

}
