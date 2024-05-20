"use server";

import { RSVP } from "../../auto-generated-stubs/Api";

export const addRsvpServer = async (
    primaryFullName: string,
    primaryVegetarian: boolean,
    primaryGlutenFree: boolean,
    primaryAllergies: string,
    partnerFullName: string,
    partnerVegetarian: boolean,
    partnerGlutenFree: boolean,
    partnerAllergies: string

): Promise<RSVP> => {
    const errorRsvp: RSVP = {
        'rsvpId': "-1",
    };
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/rsvp';
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
            const jsonObject: RSVP = await response.json();
            return jsonObject;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            return errorRsvp;
        });
    return apiResponse;

};