package com.funfacts.factsapp.services;

import io.jsonwebtoken.Claims;

public interface JwtService {
  String createJWT(String username);
  Claims decodeJWT(String jwt);
}
