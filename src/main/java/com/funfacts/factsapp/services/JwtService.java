package com.funfacts.factsapp.services;

import io.jsonwebtoken.Claims;

public interface JwtService {
  String createJWT(String id, String issuer, String subject, long ttlMillis);
  Claims decodeJWT(String jwt);
}
