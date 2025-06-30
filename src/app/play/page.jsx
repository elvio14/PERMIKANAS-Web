"use client"
import Wordle from "@/components/wordle/wordle";
import { useState, useEffect } from "react";

export default function Play(){
    const [gameStatus, setGameStatus] = useState("play");

    const handleSignalFromWordle = (status) => {
        console.log("Signal received from Wordle:", status);
        setGameStatus(status); // Update parent state based on the signal
    };

    const handleSolved = () => {

    }

    useEffect(()=> {
        if(gameStatus === "solved"){
            handleSolved()
        }

    }, [gameStatus])
    return (
        <div className="h-[100vh] pb-[12rem] h-fit">
            {gameStatus === "play" && <Wordle word="bakmi" onSignal={handleSignalFromWordle}/>}
            
            {gameStatus === "solved" && 
                <div className="bg-['papayawhip'] w-[50vw] absolute">
                    <h2>Cakep!</h2>
                </div>
            }

            {gameStatus === "failed" &&
                <div className="bg-['papayawhip'] w-[50vw] absolute">
                    <h2>Coba lagi besok!</h2>
                </div>
            }
        </div>
    )
}