package com.rk.weddingbackend.service;

import com.rk.weddingbackend.model.RSVP;
import com.rk.weddingbackend.repository.RSVPRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class RSVPServiceImpl implements RSVPService {

    private final RSVPRepository rsvpRepository;

    RSVPServiceImpl(RSVPRepository rsvpRepository){
        this.rsvpRepository = rsvpRepository;
    }

    @Override
    public RSVP create(RSVP rsvp) {
//        rsvp.setRsvpId(UUID.randomUUID().toString().split("-")[0]); // using mongodb auto generated ids.
        return rsvpRepository.save(rsvp);
    }

    @Override
    public RSVP retrieve(String rsvpId) {
        return rsvpRepository.findById(rsvpId).get();
    }

    @Override
    public void delete(String rsvpId) {
        log.info("deleting {}", retrieve(rsvpId));
        rsvpRepository.deleteById(rsvpId);
    }

    @Override
    public List<RSVP> list() {
        return rsvpRepository.findAll();
    }
}
