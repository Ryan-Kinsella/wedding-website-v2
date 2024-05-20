package com.rk.weddingbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "spotify_suggestion")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpotifySuggestion {
    @Id
    private String spotifySuggestionId;
    private String songName;
    private String artistName;
}
