package com.rk.weddingbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
@SpringBootApplication
public class WeddingBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeddingBackendApplication.class, args);
	}

}
