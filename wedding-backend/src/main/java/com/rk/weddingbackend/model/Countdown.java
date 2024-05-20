package com.rk.weddingbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Countdown {
    private int years;
    private int months;
    private int days;
    private int hours;
    private int minutes;
    private int seconds;
}

