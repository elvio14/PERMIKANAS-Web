"use client"
import Wordle from "@/components/wordle/wordle";
import ResultImage from "@/components/wordle/resultImage";
import { useState, useEffect } from "react";
import { submitWordle, getAllSubmissions, getWordleByNumber, getWordleUserData, updateUserData } from "../../actions";
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
    const [curPanelValues, setCurPanelValues] = useState([])
    const [loading, setLoading] = useState(true)
    const [lastState, setLastState] = useState(null)
    
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

    const handleUpdateUserData = async (panelValues) => {
        const isSolved = gameStatus === "solved"
        let score = userData.totalScore
        if(isSolved){
            score += getScore()
        }
        const data = {
            lastWordleNumber: curWordle.number,
            lastWordleState: panelValues,
            lastWordleIsSolved: isSolved,
            totalScore: score
        }
        try{
            await updateUserData(id,data).then(() => console.log("Update userData: " + data))
        }catch(err){
            console.error(err)
        }
    }

    const handlePanelValuesFromWordle = (panelValues) => {
        setCurPanelValues(panelValues)
        const rs = JSON.stringify(panelValues)
        console.log(rs)
        handleUpdateUserData(rs)
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
            await submitWordle(data).then(()=> console.log("Submit wordle: " + data))
        }catch(err){
            console.error(err)
        }
    }

    const handleLastState = () => {
        console.log("HandleLastState lastWordleState: " + userData.lastWordleState)
        if(curWordle.number !== userData.lastWordleNumber){
            console.log("curWordle: " + curWordle + " lastWordleNumber: " + userData.lastWordleNumber)
            return
        }

        const lastWordleState = JSON.parse(userData.lastWordleState)
        setLastState(lastWordleState)
    }

    useEffect(()=> {
        if(gameStatus === "solved"){
            handleUpdateUserData(JSON.stringify(curPanelValues))
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
                    setLoading(false)
                })
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
                    setLoading(false)
                })
            }catch(err){
                console.error(err)
            }
        }
        
        fetchWordle()
        fetchUser()
    }, [])

    useEffect(()=> {
        if(userData){
            handleLastState()
            setGameStatus("play")
        }
    }, [userData])

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }
    
    if(loading){
      return (<Loading></Loading>)
    }

    return (
        <>{mobile ? <HeaderMobile/> : <Header/>}

        <div className="h-[100vh] mt-16 md:mt-2 mb-[12rem] flex flex-col items-center justify-center">
            {/* <SubButton text="Wordle"/> */}
            <h2 className="manrope-body">username: <b>{userData.username}</b></h2>
            <h2 className="manrope-body">Wordle#<b>{curWordle.number}</b></h2>
            {gameStatus === "play" && curWordle != null && 
                <Wordle word={curWordle.word}
                onSignal={handleSignalFromWordle}
                onPanelResults={handlePanelResultsFromWordle}
                onPanelValues={handlePanelValuesFromWordle}
                lastState={lastState}
                />}
            
            {gameStatus === "solved" && 
                <div className="w-[50vw] h-[50vh] p-8 flex flex-col items-center justify-center gap-8">
                    <h2 className="manrope-h2 text-xl">{solvedMessages[Math.floor(Math.random() * solvedMessages.length)]}</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                </div>
            }

            {gameStatus === "failed" &&
                <div className="bg-['papayawhip'] w-[50vw] flex flex-col items-center justify-center">
                    <h2 className="manrope-h2 text-xl">Yah.. coba lagi besok!</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                </div>
            }
        </div>
        </>
    )
}