package com.funfacts.factsapp.dto;

import com.funfacts.factsapp.entities.User;

import java.util.Date;

public class RegisterDto {
  private String username;
  private String avatar;
  private String password;
  private String firstName;
  private String lastName;
  private String email;

  public User mapToUserEntity() {
    User user = new User();
    user.setUsername(getUsername());
    user.setAvatar(getAvatar());
    user.setPassword(getPassword());
    user.setFirstName(getFirstName());
    user.setLastName(getLastName());
    user.setEmail(getEmail());
    user.setDateJoined(new Date().toString());
    return user;
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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
}
