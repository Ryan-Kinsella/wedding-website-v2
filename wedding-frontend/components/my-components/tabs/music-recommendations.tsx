"use client";

import React, { useState, useEffect } from 'react';
import { TextInput } from "../reusable/text-input";
import { Api, SpotifySuggestion } from "../auto-generated-stubs/Api";
// import Alert from '@mui/material/Alert';
import { AlertCloseTimeout } from '../reusable/alert-close-timeout';
import { addSpotifySuggestionServer } from '../reusable/server-side-api-call/add-spotify-suggestion';


export const MusicRecommendations = ({

}: {
    }) => {
    useEffect(() => {
        updateSpotifySuggestionList();
    }, [])

    const [spotifySuggestions, setSpotifySuggestions] = useState<SpotifySuggestion[] | null>(null);
    const [songNameInput, setSongNameInput] = useState('');
    const [artistNameInput, setArtistNameInput] = useState('');
    const [alertTimeout, setAlertTimeout] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpenAlert = () => {
        setOpen(false);
        setOpen(true);
    };

    const updateSpotifySuggestionList = () => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/spotify-suggestion';
        fetch(url, { // https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams
            method: 'GET',
            headers: {

            },
        })
            .then(async response => {
                try {
                    const ss: SpotifySuggestion[] = await response.json();
                    for (const spotifySuggestion of ss) {
                        setSpotifySuggestions(prevSpotifySuggestions => {
                            if (prevSpotifySuggestions === null) {
                                return [spotifySuggestion];
                            } else {
                                const exists = prevSpotifySuggestions.some(suggestion => suggestion.spotifySuggestionId === spotifySuggestion.spotifySuggestionId);
                                if (exists) {
                                    return prevSpotifySuggestions;
                                } else {
                                    return [...prevSpotifySuggestions, spotifySuggestion];
                                }
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
                return response.ok;
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    const rotationValues = [3, 6];

    // const getRandomRotation = () => { // doesn't work.
    //     const randomIndex = Math.floor(Math.random() * rotationValues.length);
    //     const rotation = rotationValues[randomIndex];
    //     const plusOrMinus = rotation % 2 == 0 ? '' : '-'
    //     return `transform ${plusOrMinus}rotate-${rotation} hover:rotate-3`;
    // };

    const addSpotifySuggestion = async () => {
        const addedSpotifySuggestion: SpotifySuggestion = await addSpotifySuggestionServer(songNameInput, artistNameInput);
        setSpotifySuggestions(prevSpotifySuggestions => {
            if (prevSpotifySuggestions === null) {
                return [addedSpotifySuggestion];
            } else {
                const exists = prevSpotifySuggestions.some(suggestion => suggestion.spotifySuggestionId === addedSpotifySuggestion.spotifySuggestionId);
                if (exists) {
                    return prevSpotifySuggestions;
                } else {
                    return [...prevSpotifySuggestions, addedSpotifySuggestion];
                }
            }
        });
        setAlertTimeout(5000);
        handleOpenAlert();
    }

    return (
        <div className="w-full h-[800px] relative rounded-2xl p-4 inline-flex flex-col items-center font-bold text-orange-100 ">
            <p className="pb-4 text-xl md:text-4xl">Music Recommendations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-stretch">
                <div className="flex justify-items-center items-center content-center place-content-center rounded-xl overflow-hidden">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/15Ly3H1vr5lq3AQdtlR47V"
                        width="300"
                        height="380"
                        allow="encrypted-media"
                    ></iframe>
                </div>
                {/* <div className="flex flex-col justify-items-center content-center place-content-center"> */}
                <div className="flex flex-col justify-center items-center">

                    <div className="p-4">
                        <TextInput
                            textValue={songNameInput}
                            name="Song Name"
                            onTextChange={(e) => setSongNameInput(e)}
                        />
                    </div>
                    <div className="p-4">
                        <TextInput
                            textValue={artistNameInput}
                            name="Artist Name"
                            onTextChange={(e) => setArtistNameInput(e)}
                        />
                    </div>
                    <div className="p-4">
                        <button className="px-12 py-4 rounded-full bg-spotify font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
                            onClick={addSpotifySuggestion}
                        >Add Song</button>
                    </div>
                </div>
            </div>
            <AlertCloseTimeout open={open} timeout={alertTimeout} text="Successfully added to list below. Songs will manually be added to playlist."></AlertCloseTimeout>

            {/* todo popup use library */}
            {/* todo add to height of parent 1000px box as rows increase */}
            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 items-center w-4/5">
                {spotifySuggestions === null ?
                    (
                        <div>Loading...</div>
                    )
                    : Array.isArray(spotifySuggestions) ?
                        (
                            spotifySuggestions.map(spotifySuggestion => (
                                <div key={spotifySuggestion.spotifySuggestionId} className={`transform hover:rotate-3`}>
                                    <p className="border px-4 py-2 hover:border-orange-200 text-sm sm:text-xxs">{spotifySuggestion.songName}</p>
                                    <p className="border px-4 py-2 hover:border-orange-200 text-sm sm:text-xxs">{spotifySuggestion.artistName}</p>
                                </div>
                            ))
                        )
                        :
                        (
                            <div>AN ERROR OCCURRED</div>
                        )
                }
            </div>
        </div >

    );

}