package com.funfacts.factsapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
}
