package com.funfacts.factsapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
  @Id
  @Column(name = "username")
  private String username;

  @Column(name = "avatar")
  private String avatar;

  @Column(name = "password")
  @JsonIgnore
  private String password;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "email")
  private String email;

  @Column(name = "date_joined")
  private String dateJoined;

  @OneToMany(mappedBy="user", cascade={CascadeType.ALL})
  @JsonManagedReference
  private Set<Post> posts;


  public User() { }

  public User(String username, String avatar, String password, String firstName, String lastName, String email) {
    this.username = username;
    this.avatar = avatar;
    this.password = new BCryptPasswordEncoder().encode(password);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateJoined = new Date().toString();
  }

  public void addPost(Post post) {
    if (posts == null) {
      posts = new HashSet<>();
    }
    posts.add(post);
    post.setUser(this);
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
    this.password = new BCryptPasswordEncoder().encode(password);;
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

  public Set<Post> getPosts() {
    return posts;
  }

  public void setPosts(Set<Post> posts) {
    this.posts = posts;
  }
}
