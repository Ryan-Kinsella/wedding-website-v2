'use server';

import { SpotifySuggestion } from "@prisma/client";

// required for cors to work.

export const addSpotifySuggestionServer =
    async (songNameInput: string, artistNameInput: string,)
        : Promise<SpotifySuggestion> => {
        const errorSpotifySuggestion: SpotifySuggestion = {
            id: "-1",
            songName: "",
            artistName: ""
        };

        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/spotify-suggestion'; ''
        const apiResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                "Connection": "keep-alive",

            },
            body: JSON.stringify({
                'songName': songNameInput,
                'artistName': artistNameInput,
            }),
        })
            .then(async response => {
                const jsonObject: SpotifySuggestion = await response.json();
                console.log(jsonObject);
                return jsonObject;
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                return errorSpotifySuggestion;
            })
        return apiResponse;
        return errorSpotifySuggestion;
    };