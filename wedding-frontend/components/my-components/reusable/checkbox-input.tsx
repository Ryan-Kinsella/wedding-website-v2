"use client";

import { useState } from "react";
import { SpotifyButton } from "../reusable/spotify-button";
import { TextInput } from "../reusable/text-input";


export const CheckboxInput = ({
    text,
    clickedText,
    emitCheckboxChangeToParent
}: {
    text?: string;
    clickedText?: string;
    emitCheckboxChangeToParent?: (value: boolean) => void;
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        if (emitCheckboxChangeToParent) {
            emitCheckboxChangeToParent(!isChecked); // emit to parent function
        }
        setIsChecked(!isChecked);
    };

    return (
        //min-w-[200px]
        <div className="w-full h-full">
            {
                !isChecked ?
                    (
                        <div className="w-full h-full cursor-pointer border  rounded-lg px-4 py-2 hover:text-secondary hover:border-primary select-none"
                            onClick={toggleCheckbox}
                        >
                            {text}
                        </div>
                    )
                    :
                    (
                        <div className="w-full h-full relative">

                            <div className="w-full h-full cursor-pointer border rounded-lg px-4 py-2  hover:border-primary select-none"
                                onClick={toggleCheckbox}
                            >
                                {clickedText}
                                <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 blur"></div>

                            </div>
                        </div>
                    )
            }
        </div>
    );

}