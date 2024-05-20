"use client";

import { useState } from "react";
import { SpotifyButton } from "../reusable/spotify-button";
import { TextInput } from "../reusable/text-input";
import { CheckboxInput } from "../reusable/checkbox-input";
import { AlertCloseTimeout } from "../reusable/alert-close-timeout";
import { addRsvpServer } from "../reusable/server-side-api-call/add-rsvp";
import { RSVP } from "../auto-generated-stubs/Api";


export const Rsvp = ({
}: {

    }) => {


    const [primaryFullName, setPrimaryFullName] = useState('');
    const [primaryVegetarian, setPrimaryVegetarian] = useState(false);
    const [primaryGlutenFree, setPrimaryGlutenFree] = useState(false);
    const [primaryAllergies, setPrimaryAllergies] = useState('');
    const [partnerFullName, setPartnerFullName] = useState('');
    const [partnerAllergies, setPartnerAllergies] = useState('');
    const [partnerVegetarian, setPartnerVegetarian] = useState(false);
    const [partnerGlutenFree, setPartnerGlutenFree] = useState(false);
    const [alertTimeout, setAlertTimeout] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpenAlert = () => {
        setOpen(false);
        setOpen(true);
    };

    const addRsvp = async () => {
        const addedRsvp: RSVP = await addRsvpServer(primaryFullName,
            primaryVegetarian,
            primaryGlutenFree,
            primaryAllergies,
            partnerFullName,
            partnerVegetarian,
            partnerGlutenFree,
            partnerAllergies,
        );
        if (addedRsvp.rsvpId != "-1") {
            handleOpenAlert();
        }
    };

    return (
        <div className="w-full h-[800px] relative rounded-2xl inline-flex flex-col items-center font-bold text-orange-100 mt-8">
            <div className="w-full flex flex-col items-center justify-center h-full md:w-3/4">
                <p className="mt-20 pb-4 text-xl md:text-4xl">RSVP</p>
                <div className="p-3 w-1/2">
                    <TextInput
                        name="Your Full Name"
                        textValue={primaryFullName}
                        onTextChange={(e) => setPrimaryFullName(e)}
                    ></TextInput>
                </div>
                <div className="p-3 w-1/2">
                    <CheckboxInput
                        text="Are you Gluten Free?"
                        clickedText="✅ Nice, you are Gluten Free ✅"
                        emitCheckboxChangeToParent={(e) => setPrimaryGlutenFree(e)}
                    />
                </div>
                <div className="p-3 w-1/2">
                    <CheckboxInput
                        text="Are you Vegetarian?"
                        clickedText="✅ Nice, you are Vegetarian ✅"
                        emitCheckboxChangeToParent={(e) => setPrimaryVegetarian(e)}
                    />
                </div>
                <div className="p-3 w-1/2">
                    <TextInput
                        name="You have any Allergies?"
                        textValue={primaryAllergies}
                        onTextChange={(e) => setPrimaryAllergies(e)}
                    ></TextInput>
                </div>
                <div className="p-8"></div>
                <div><p className="text-md p-4 text-center">If you have a Partner who wants to come</p></div>
                <div className="p-3 w-1/2">
                    <TextInput name="Partners Full Name"
                        textValue={partnerFullName}
                        onTextChange={(e) => setPartnerFullName(e)}
                    ></TextInput>
                </div>
                <div className="p-3 w-1/2">
                    <CheckboxInput
                        text="Is your Partner Gluten Free?"
                        clickedText="✅ Nice, your Partner is Gluten Free ✅"
                        emitCheckboxChangeToParent={(e) => setPartnerGlutenFree(e)}
                    />
                </div>
                <div className="p-3 w-1/2">
                    <CheckboxInput
                        text="Is your Partner Vegetarian?"
                        clickedText="✅ Nice, your Partner is Vegetarian ✅"
                        emitCheckboxChangeToParent={(e) => setPartnerVegetarian(e)}
                    />
                </div>
                <div className="p-3 w-1/2">
                    <TextInput name="Partner Allergies?"
                        textValue={partnerAllergies}
                        onTextChange={(e) => setPartnerAllergies(e)}
                    ></TextInput>
                </div>
                <div className="p-3">
                    <SpotifyButton
                        onclickFunction={addRsvp}
                        text="Celebrating love: locked in"
                    ></SpotifyButton>
                </div>
                <div className="p-6 sm:p-12">
                    <AlertCloseTimeout open={open} timeout={alertTimeout} text="Thanks for the RSVP! Head over to the Music Recommendations tab and add some songs you wanna dance to 💃 🕺" />
                </div>
            </div>
        </div>
    );
}