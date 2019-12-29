package com.funfacts.factsapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "bug")
public class ReportedBug {
  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "reporter_username")
  private String reporterUsername;

  @Column(name = "description")
  private String description;

  @Column(name = "date_reported")
  private String dateReported;

  public ReportedBug() { };

  public ReportedBug(String reporterUsername, String description) {
    this.reporterUsername = reporterUsername;
    this.description = description;
    this.dateReported = new Date().toString();
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getReporterUsername() {
    return reporterUsername;
  }

  public void setReporterUsername(String reporterUsername) {
    this.reporterUsername = reporterUsername;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDateReported() {
    return dateReported;
  }

  public void setDateReported(String dateReported) {
    this.dateReported = dateReported;
  }
}
