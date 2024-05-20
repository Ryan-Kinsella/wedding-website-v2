package com.rk.weddingbackend.controller;

import com.rk.weddingbackend.model.SpotifySuggestion;
import com.rk.weddingbackend.service.SpotifySuggestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/spotify-suggestion")
@RestController
public class SpotifySuggestionController {

    private final SpotifySuggestionService spotifySuggestionService;

    SpotifySuggestionController(SpotifySuggestionService spotifySuggestionService){
        this.spotifySuggestionService = spotifySuggestionService;
    }

    @PostMapping("")
    private SpotifySuggestion create(@RequestBody SpotifySuggestion spotifySuggestion){
        return spotifySuggestionService.create(spotifySuggestion);
    }

    @GetMapping("/{spotifySuggestionId}")
    private SpotifySuggestion getById(String spotifySuggestionId){
        return spotifySuggestionService.retrieve(spotifySuggestionId);
    }

    @GetMapping("")
    private List<SpotifySuggestion> list(){
        return spotifySuggestionService.list();
    }

    @DeleteMapping("/{spotifySuggestionId}")
    private void deleteById(String spotifySuggestionId){
        spotifySuggestionService.delete(spotifySuggestionId);
    }

}
