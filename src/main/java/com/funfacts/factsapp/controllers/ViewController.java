package com.funfacts.factsapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
  final String htmlLocation = "../static/build/index";

  @GetMapping({"/", "/dashboard", "/dashboard/fact", "/dashboard/activity",
      "/dashboard/manage-friends", "/dashboard/settings", "/dashboard/edit-profile",
      "/dashboard/report-bug", "/dashboard/suggest-fact"})
  public String getView() {
    return htmlLocation;
  }
}
