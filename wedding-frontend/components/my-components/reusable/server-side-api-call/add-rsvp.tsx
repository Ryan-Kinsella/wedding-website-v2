"use server";

import { Rsvp } from "@prisma/client";

export const addRsvpServer = async (
    primaryFullName: string,
    primaryVegetarian: boolean,
    primaryGlutenFree: boolean,
    primaryAllergies: string,
    partnerFullName: string,
    partnerVegetarian: boolean,
    partnerGlutenFree: boolean,
    partnerAllergies: string

): Promise<Rsvp> => {
    const errorRsvp: Rsvp = {
        id: "-1",
        primaryName: "",
        primaryVegetarian: false,
        primaryGlutenFree: false,
        primaryAllergies: null,
        partnerName: null,
        partnerVegetarian: false,
        partnerGlutenFree: false,
        partnerAllergies: null
    };
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/rsvp'; // 
    const apiResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "primaryName": primaryFullName,
            "primaryVegetarian": primaryVegetarian,
            "primaryGlutenFree": primaryGlutenFree,
            "primaryAllergies": primaryAllergies,
            "partnerName": partnerFullName,
            "partnerVegetarian": partnerVegetarian,
            "partnerGlutenFree": partnerGlutenFree,
            "partnerAllergies": partnerAllergies
        }),
    })
        .then(async response => {
            const jsonObject: Rsvp = await response.json();
            return jsonObject;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            return errorRsvp;
        });
    return apiResponse;

};