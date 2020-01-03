package com.funfacts.factsapp.dao.impl;

import com.funfacts.factsapp.dao.UserDao;
import com.funfacts.factsapp.entities.User;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
public class UserDaoImpl implements UserDao {
  final private EntityManager entityManager;

  public UserDaoImpl(final EntityManager entityManager) {
    this.entityManager = entityManager;
  }

  @Override
  @Transactional
  public void createOrUpdateUser(final User user) {
    Session session = entityManager.unwrap(Session.class);
    session.saveOrUpdate(user);
  }

  @Override
  @Transactional
  public User getUserByUsername(String username) {
    Session session = entityManager.unwrap(Session.class);
    return session.get(User.class, username);
  }
}
