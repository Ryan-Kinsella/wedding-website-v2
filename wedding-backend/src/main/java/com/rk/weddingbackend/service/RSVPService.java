package com.rk.weddingbackend.service;

import com.rk.weddingbackend.model.RSVP;

import java.util.List;

public interface RSVPService {
    RSVP create(RSVP rsvp);
    RSVP retrieve(String rsvpId);
//    RSVP update(int id, RSVP rsvp);
    void delete(String rsvpId);
    List<RSVP> list();
}
