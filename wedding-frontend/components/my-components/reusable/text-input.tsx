"use client";

export const TextInput = ({
    name,
    textValue,
    onTextChange, // parent function to handle text change
}: {
    name?: string;
    textValue?: string;
    onTextChange?: (value: string) => void; // parent function type
}) => {
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onTextChange) {
            onTextChange(event.target.value); // call parent function, with the string value of the html input
        }
    };



    return (
        <div className="relative w-full h-10">
            <input
                className="peer w-full h-full bg-transparent outline outline-0 focus:outline-0 disabled:border-0 transition-all 
        placeholder-shown:border placeholder-shown:border-t-inherit border 
        focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 
         focus:border-primary border-t-transparent "
                placeholder=" "
                title=" "
                value={textValue}
                onChange={handleTextChange}
            />
            <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-default 
        leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary transition-all -top-1.5
        peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[5.5px]
        before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t  peer-focus:before:border-t-2  before:border-l 
        peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block
        after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[5.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md
        after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all
        peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary peer-focus:text-primary 
        peer-focus:before:!border-primary  peer-focus:after:!border-primary">{name}
            </label>
        </div>
    );
};