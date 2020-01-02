package com.funfacts.factsapp.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "post")
public class Post {
  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "content")
  private String content;

  @Column(name = "likes")
  private int likes;

  @ManyToOne
  @JoinColumn(name = "user_fk")
  @JsonBackReference
  private User user;

  @OneToMany(mappedBy="post", cascade={CascadeType.ALL})
  @JsonManagedReference
  private Set<Comment> comments;

  public Post() { }

  public Post(String content, int likes) {
    this.content = content;
    this.likes = likes;
  }

  public void addComment(Comment comment) {
    if (comments == null) {
      comments = new HashSet<>();
    }
    comments.add(comment);
    comment.setPost(this);
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public int getLikes() {
    return likes;
  }

  public void setLikes(int likes) {
    this.likes = likes;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Set<Comment> getComments() {
    return comments;
  }

  public void setComments(Set<Comment> comments) {
    this.comments = comments;
  }
}
