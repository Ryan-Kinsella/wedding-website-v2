package com.rk.weddingbackend.repository;

import com.rk.weddingbackend.model.RSVP;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RSVPRepository extends MongoRepository<RSVP,String> {
}
