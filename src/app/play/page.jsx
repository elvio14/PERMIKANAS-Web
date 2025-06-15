"use client"
import Wordle from "@/components/wordle/wordle";
import { useState } from "react";

export default function Play(){
    const [gameStatus, setGameStatus] = useState("");

    const handleSignalFromWordle = (status) => {
        console.log("Signal received from Wordle:", status);
        setGameStatus(status); // Update parent state based on the signal
    };
    return (
        <div className="h-[100vh] pb-[12rem] h-fit">
            <Wordle word="bakmi" onSignal={handleSignalFromWordle}/>
        </div>
    )
}