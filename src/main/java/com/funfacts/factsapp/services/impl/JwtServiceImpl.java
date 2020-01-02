package com.funfacts.factsapp.services.impl;

import com.funfacts.factsapp.services.JwtService;
import com.funfacts.factsapp.shared.Constants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {
  @Override
  public String createJWT(String username) {

    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

    long nowMillis = System.currentTimeMillis();
    Date now = new Date(nowMillis);

    // sign key
    byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(System.getenv("JWT_KEY"));
    Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

    JwtBuilder builder = Jwts.builder().setId(username)
        .setIssuedAt(now)
        .signWith(signatureAlgorithm, signingKey);

    long expMillis = nowMillis + Constants.LOGIN_DURATION;
    Date exp = new Date(expMillis);
    builder.setExpiration(exp);

    return builder.compact();
  }

  @Override
  public Claims decodeJWT(String jwt) {
    //This line will throw an exception if it is not a signed JWS (as expected)
    Claims claims = Jwts.parser()
        .setSigningKey(DatatypeConverter.parseBase64Binary(System.getenv("JWT_KEY")))
        .parseClaimsJws(jwt).getBody();
    return claims;
  }
}
