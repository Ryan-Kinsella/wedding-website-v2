package com.rk.weddingbackend.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Data
@Configuration
@ConfigurationProperties("csrf.cors")
public class CsrfCorsProperties {
    private List<String> allowedOrigins;
}
