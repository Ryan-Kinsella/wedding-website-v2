package com.rk.weddingbackend.service;

import com.rk.weddingbackend.model.SpotifySuggestion;
import com.rk.weddingbackend.repository.SpotifySuggestionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class SpotifySuggestionServiceImpl implements SpotifySuggestionService {

    private final SpotifySuggestionRepository spotifySuggestionRepository;

    SpotifySuggestionServiceImpl(SpotifySuggestionRepository spotifySuggestionRepository){
        this.spotifySuggestionRepository = spotifySuggestionRepository;
    }

    @Override
    public SpotifySuggestion create(SpotifySuggestion spotifySuggestion) {
//        spotifySuggestion.setSpotifySuggestionId(UUID.randomUUID().toString().split("-")[0]); // using mongodb auto generated ids.
        return spotifySuggestionRepository.save(spotifySuggestion);
    }

    @Override
    public SpotifySuggestion retrieve(String spotifySuggestionId) {
        return spotifySuggestionRepository.findById(spotifySuggestionId).get();
    }

    @Override
    public void delete(String spotifySuggestionId) {
        log.info("deleting {}", retrieve(spotifySuggestionId));
        spotifySuggestionRepository.deleteById(spotifySuggestionId);
    }

    @Override
    public List<SpotifySuggestion> list() {
        return spotifySuggestionRepository.findAll();
    }
}
