package com.funfacts.factsapp.dto;

import com.funfacts.factsapp.entities.User;

public class UserDetailsDto {
  private String username;
  private String avatar;
  private String firstName;
  private String lastName;
  private String email;
  private String dateJoined;
  private String jwt;

  public UserDetailsDto() { }

  public UserDetailsDto(User user) {
    setUsername(user.getUsername());
    setAvatar(user.getAvatar());
    setFirstName(user.getFirstName());
    setLastName(user.getLastName());
    setEmail(user.getEmail());
    setDateJoined(user.getDateJoined());
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getDateJoined() {
    return dateJoined;
  }

  public void setDateJoined(String dateJoined) {
    this.dateJoined = dateJoined;
  }

  public String getJwt() {
    return jwt;
  }

  public void setJwt(String jwt) {
    this.jwt = jwt;
  }
}
