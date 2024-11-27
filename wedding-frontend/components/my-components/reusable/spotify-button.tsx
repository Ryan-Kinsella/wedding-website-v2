
"use client"

export const SpotifyButton = ({
    onclickFunction,
    text
}: {
    onclickFunction: () => void;
    text: string;
}) => {
    return (
        <div className="p-4">
            <button className="px-12 py-4 rounded-full 
            bg-primary
            hover:bg-secondary
            font-bold text-primary-foreground tracking-widest uppercase transform hover:scale-105  transition-colors duration-200"
                onClick={onclickFunction}
            >
                {text}
            </button>
        </div>
    );
}

