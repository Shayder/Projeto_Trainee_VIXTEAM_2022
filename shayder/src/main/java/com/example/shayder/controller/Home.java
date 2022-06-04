package com.example.shayder.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Home implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/home").setViewName("forward:/home.html");
    }
}
