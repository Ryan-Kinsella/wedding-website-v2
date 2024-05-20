package com.rk.weddingbackend.controller;

import com.rk.weddingbackend.model.Countdown;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;


@RestController
public class CountdownController {

    private final LocalDateTime weddingDate = LocalDateTime.of(2025, Month.SEPTEMBER, 27, 9, 0);

    private Countdown calculateTimeRemaining() {
        LocalDateTime currentDate = LocalDateTime.now();
        Duration duration = Duration.between(currentDate, weddingDate);
        int years = (int) (duration.toDays() / 365);
        int months = (int) ((duration.toDays() % 365) / 30);
        int days = (int) (duration.toDays() % 30);
        int hours = (int) duration.toHours() % 24;
        int minutes = (int) duration.toMinutes() % 60;
        int seconds = duration.toSecondsPart();
        return new Countdown(years, months, days, hours, minutes, seconds);
    }

    @GetMapping("/countdown")
    private Countdown countdown(){
        return calculateTimeRemaining();
    }
}
