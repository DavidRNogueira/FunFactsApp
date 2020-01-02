package com.funfacts.factsapp.filters;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;;

@Component
@Order(1)
public class AuthFilter implements Filter {
  @Override
  public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain) throws IOException, ServletException {
    HttpServletResponse res = (HttpServletResponse) response;
    HttpServletRequest req = (HttpServletRequest) request;

    String url = req.getRequestURI().toString();

    String jwtHeader = req.getHeader("Bearer-Token");
    if (req.getMethod().equalsIgnoreCase(HttpMethod.GET.toString()) && (url.contains("/static") || url.equals("/"))) {
      chain.doFilter(request, response);
      return;
    }

    if (req.getMethod().equalsIgnoreCase(HttpMethod.POST.toString()) && (url.contains("/auth/login") || url.contains("/auth/register"))) {
      chain.doFilter(request ,response);
      return;
    }

    if (jwtHeader == null) {
      //redirect here
      return;
    }
  }
}
