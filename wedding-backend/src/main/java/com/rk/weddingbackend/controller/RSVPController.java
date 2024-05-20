package com.rk.weddingbackend.controller;


import com.rk.weddingbackend.model.RSVP;
import com.rk.weddingbackend.service.RSVPService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/rsvp")
@RestController
public class RSVPController {

    private final RSVPService rsvpService;

    RSVPController(RSVPService rsvpService){
        this.rsvpService = rsvpService;
    }

    @PostMapping("")
    private RSVP create(@RequestBody RSVP rsvp){
        return rsvpService.create(rsvp);
    }

    @GetMapping("/{rsvpId}")
    private RSVP getById(String rsvpId){
        return rsvpService.retrieve(rsvpId);
    }

    @GetMapping("")
    private List<RSVP> list(){
        return rsvpService.list();
    }

    @DeleteMapping("/{rsvpId}")
    private void deleteById(String rsvpId){
        rsvpService.delete(rsvpId);
    }

}
