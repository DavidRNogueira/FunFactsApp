package com.funfacts.factsapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
  final String htmlLocation = "../static/build/index";

  @GetMapping("/")
  public String getView() {
    return htmlLocation;
  }
}
