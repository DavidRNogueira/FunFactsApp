package com.funfacts.factsapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fact")
public class Fact {
  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "content")
  private String content;

  @Column(name = "category")
  private String category;

  @Column(name = "image")
  private String image;

  @Column(name = "shares")
  private int shares;

  @Column(name = "date_suggested")
  private String dateSuggested;

  @Column(name = "approved")
  private int approved; // 0 not approved/ 1 is approved (Could change to boolean ?)

  public Fact() { };

  public Fact(String content, String category, String image, int shares, String dateSuggested) {
    this.content = content;
    this.category = category;
    this.image = image;
    this.shares = shares;
    this.dateSuggested = dateSuggested;
    this.approved = 0;
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

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public int getShares() {
    return shares;
  }

  public void setShares(int shares) {
    this.shares = shares;
  }

  public String getDateSuggested() {
    return dateSuggested;
  }

  public void setDateSuggested(String dateSuggested) {
    this.dateSuggested = dateSuggested;
  }

  public int getApproved() {
    return approved;
  }

  public void setApproved(int approved) {
    this.approved = approved;
  }
}
