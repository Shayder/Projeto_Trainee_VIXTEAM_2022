package com.example.shayder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.example.shayder.repository")
@SpringBootApplication
public class ShayderApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShayderApplication.class, args);
	}

}
