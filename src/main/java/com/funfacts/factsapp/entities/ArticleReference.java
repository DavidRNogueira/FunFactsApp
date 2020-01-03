package com.funfacts.factsapp.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "article_reference")
public class ArticleReference {
  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "article_link")
  private String articleLink;

  @ManyToOne
  @JoinColumn(name = "fact_fk")
  @JsonBackReference
  private Fact fact;

  public ArticleReference() { };

  public ArticleReference(String articleLink) {
    this.articleLink = articleLink;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getArticleLink() {
    return articleLink;
  }

  public void setArticleLink(String articleLink) {
    this.articleLink = articleLink;
  }

  public Fact getFact() {
    return fact;
  }

  public void setFact(Fact fact) {
    this.fact = fact;
  }
}
