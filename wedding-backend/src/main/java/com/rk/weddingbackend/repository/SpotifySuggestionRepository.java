package com.rk.weddingbackend.repository;

import com.rk.weddingbackend.model.SpotifySuggestion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpotifySuggestionRepository  extends MongoRepository<SpotifySuggestion,String> {
}
