package com.rk.weddingbackend.service;

import com.rk.weddingbackend.model.SpotifySuggestion;

import java.util.List;

public interface SpotifySuggestionService {
    SpotifySuggestion create(SpotifySuggestion rsvp);
    SpotifySuggestion retrieve(String spotifySuggestionId);
    void delete(String spotifySuggestionId);
    List<SpotifySuggestion> list();
}
