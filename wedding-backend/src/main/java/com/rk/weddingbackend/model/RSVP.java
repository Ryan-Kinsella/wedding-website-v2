package com.rk.weddingbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "rsvp")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RSVP {
    @Id
    private String rsvpId;
    private String  primaryName;
    private Boolean primaryVegetarian = false;
    private Boolean primaryGlutenFree = false;
    private String  primaryAllergies;
    private String  partnerName;
    private Boolean partnerVegetarian = false;
    private Boolean partnerGlutenFree = false;
    private String  partnerAllergies;
}
