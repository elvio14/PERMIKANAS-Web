"use client"
import Wordle from "@/components/wordle/wordle";
import ResultImage from "@/components/wordle/resultImage";
import { useState, useEffect } from "react";
import { submitWordle, getAllSubmissions, getWordleByNumber } from "../actions";
import { useRouter } from "next/navigation"

export default function Play(){
    const [gameStatus, setGameStatus] = useState("load");
    const [curWordle, setCurWordle] = useState({})
    const [curPanelResults, setCurPanelResults] = useState([])

    const handleSignalFromWordle = (status) => {
        console.log("Signal received from Wordle:", status);
        setGameStatus(status); // Update parent state based on the signal
    }

    const handlePanelResultsFromWordle = (panelResults) => {
        console.log(JSON.stringify(panelResults))
        setCurPanelResults(panelResults)
    }

    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path)
    }

    const handleSolved = async () => {
        const data = {
            username: "dev",
            wordleNumber: curWordle.number,
            panelResults: JSON.stringify(curPanelResults),
            chapter: "York",
            city: "Toronto"
        }
        try{
            await submitWordle(data).then(()=> console.log(data))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=> {
        if(gameStatus === "solved"){
            handleSolved()
        }

    }, [gameStatus])

    useEffect(() => {
        const fetchWordle = async () => {
            try{
                console.log("getting wordle")
                await getWordleByNumber(1).then((wordle) => {
                    setCurWordle(wordle)
                    console.log("Got wordle:")
                    console.log(wordle)
                }).then(()=> setGameStatus("play"))
            }catch(err){
                console.error(err)
            }
        }

        fetchWordle()
    }, [])
    return (
        <div className="h-[100vh] pb-[12rem] h-fit">
            {gameStatus === "play" && curWordle != null &&
                <Wordle word={curWordle.word}
                onSignal={handleSignalFromWordle}
                onPanelResults={handlePanelResultsFromWordle}/>}
            
            {gameStatus === "solved" && 
                <div className="bg-red-900 w-[50vw] h-[50vh] p-8">
                    <h2>Cakep!</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                </div>
            }

            {gameStatus === "failed" &&
                <div className="bg-['papayawhip'] w-[50vw]">
                    <h2>Coba lagi besok!</h2>
                </div>
            }
        </div>
    )
}