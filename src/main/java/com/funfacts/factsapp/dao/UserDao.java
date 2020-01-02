package com.funfacts.factsapp.dao;

import com.funfacts.factsapp.entities.User;

public interface UserDao {
  void createOrUpdateUser(final User user);
  User getUserByUsername(String username);
}
