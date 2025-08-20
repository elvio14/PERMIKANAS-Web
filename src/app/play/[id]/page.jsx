"use client"
import Wordle from "@/components/wordle/wordle";
import ResultImage from "@/components/wordle/resultImage";
import { useState, useEffect } from "react";
import { submitWordle, getAllSubmissions, getWordleByNumber, getWordleUserData } from "../../actions";
import { useRouter, useParams } from "next/navigation"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import Header from "@/components/header"
import SubButton from "@/components/subButton";
import { ResultType } from "@/components/wordle/resultTypes";



export default function Play(){
    const router = useRouter()
    const params = useParams()
    if (params == null) return <Loading/>
    const {id} = params
    const [userData, setUserData] = useState("")
    const [gameStatus, setGameStatus] = useState("load");
    const [curWordle, setCurWordle] = useState({})
    const [curPanelResults, setCurPanelResults] = useState([])
    
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path)
    }
    const solvedMessages = ['Cakep!', 'Mantap!', 'Keren!']

    const handleSignalFromWordle = (status) => {
        console.log("Signal received from Wordle:", status);
        setGameStatus(status);
    }

    const handlePanelResultsFromWordle = (panelResults) => {
        console.log(JSON.stringify(panelResults))
        setCurPanelResults(panelResults)
    }

    const getScore = () => {
        let score = 110
        curPanelResults.forEach((row) => {
            if(row[0] !== ResultType.BLANK){
                score = score - 10
            }
        })
        return score
    }

    const handleSolved = async () => {
        const data = {
            username: userData.username,
            wordleNumber: curWordle.number,
            panelResults: JSON.stringify(curPanelResults),
            score: getScore() ,
            chapter: userData.chapter || "none",
            city: userData.city || "none"
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

        const fetchUser = async () => {
            try{
                console.log("getting user data")
                await getWordleUserData(id).then((user) => {
                    setUserData(user)
                    console.log("got user data: ")
                    console.log(user)
                })
            }catch(err){
                console.error(err)
            }
        }

        fetchWordle()
        fetchUser()
    }, [])

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }
    return (
        <>{mobile ? <HeaderMobile/> : <Header/>}

        <div className="h-[100vh] mt-16 md:mt-2 mb-[12rem] flex flex-col items-center justify-center">
            {/* <SubButton text="Wordle"/> */}
            <h2 className="manrope-body">username: {userData.username}</h2>
            {gameStatus === "play" && curWordle != null && 
                <Wordle word={curWordle.word}
                onSignal={handleSignalFromWordle}
                onPanelResults={handlePanelResultsFromWordle}/>}
            
            {gameStatus === "solved" && 
                <div className="w-[50vw] h-[50vh] p-8 flex flex-col items-center justify-center">
                    <h2>{solvedMessages[Math.floor(Math.random() * solvedMessages.length)]}</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                </div>
            }

            {gameStatus === "failed" &&
                <div className="bg-['papayawhip'] w-[50vw] flex flex-col items-center justify-center">
                    <h2>Coba lagi besok!</h2>
                </div>
            }
        </div>
        </>
    )
}