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
import { ResultType } from "@/components/wordle/resultTypes";
import { MainButton } from "@/components/button";


export default function Play(){
    const router = useRouter()
    const params = useParams()
    if (params == null) return <Loading/>
    const {id} = params
    const [userData, setUserData] = useState(null)
    const [userDataFetched, setUserDataFetched] = useState(false)
    const [gameStatus, setGameStatus] = useState("load");
    const [curWordle, setCurWordle] = useState({})
    const [curWordleFetched, setCurWordleFetched] = useState(false)
    const [curPanelResults, setCurPanelResults] = useState(Array.from({ length: 6 }, () => Array(5).fill(ResultType.BLANK)))
    const [curPanelValues, setCurPanelValues] = useState(Array.from({ length: 6 }, () => Array(5).fill("")))
    const [loading, setLoading] = useState(true)
    const [lastState, setLastState] = useState(null)
    const [score, setScore] = useState(0)
    const [lastWordleSolved, setLastWordleSolved] = useState(false)
    
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
        console.log("PR from wordle.jsx: " + JSON.stringify(panelResults))
        setCurPanelResults(panelResults)
    }

    const handleUpdateUserData = async () => {
        if(lastWordleSolved){
            return
        }
        const isSolved = gameStatus === "solved"
        let score = userData.totalScore
        if(isSolved){
            score += getScore()
        }
        const data = {
            lastWordleNumber: curWordle.number,
            lastWordleState: JSON.stringify(curPanelValues),
            lastWordleResults: JSON.stringify(curPanelResults),
            lastWordleIsSolved: isSolved,
            totalScore: score
        }
        try{
            await updateUserData(id,data).then(() => console.log("Updated userData: " + data))
        }catch(err){
            console.error(err)
        }
    }

    const handlePanelValuesFromWordle = (panelValues) => {
        setCurPanelValues(panelValues)
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
        console.log("in handleSolved(), curPanelResults: " + curPanelResults)
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
    const getDayOfYear = () => {
        const date = new Date()
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    useEffect(()=> {
        console.log("useEffect[gameStatus]")
        if(gameStatus === "solved" && !lastWordleSolved){
            console.log("gameStatus: " + gameStatus)
            console.log("lastWordleSolved: " + lastWordleSolved)
            setScore(getScore())
            handleUpdateUserData()
            handleSolved()
        }
    }, [gameStatus])

    useEffect(() => {
        if(!loading){
            handleUpdateUserData()
        }
    }, [curPanelValues])

    useEffect(() => {
        const fetchWordle = async () => {
            console.log("fetchWordle()")
            try{
                console.log("getting wordle")
                const day = getDayOfYear()
                const startDay = 236 //SET BASED ON ACTUAL WORDLE START DATE
                const wordleToday = day - startDay
                await getWordleByNumber(wordleToday).then((wordle) => {
                    setCurWordle(wordle)
                    setCurWordleFetched(true)
                    console.log("Got wordle:")
                    console.log(wordle)
                })
            }catch(err){
                console.error(err)
            }
        }
        
        fetchWordle()
    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            try{
                console.log("getting user data")
                await getWordleUserData(id).then((user) => {
                    setUserData(user)
                    setUserDataFetched(true)
                    setLastWordleSolved(user.lastWordleIsSolved)
                    console.log("fetchUser() got user data: ")
                    console.log(user)
                })
            }catch(err){
                console.error("error getWordleUserData: " + err)
            }
        }

        if(curWordleFetched){fetchUser()}
    }, [curWordleFetched])

    useEffect(()=> {
        console.log("useEffect[userDataFetched]")
        if(userDataFetched){
            try{
                setCurPanelResults(JSON.parse(userData.lastWordleResults))
                console.log("useEffect[userData] lastWordleResults: " + userData.lastWordleResults)
            }catch(err){
                console.error("error parsing lastWordleResults: " + err)
            }finally {
                setLoading(false)
            }
            handleLastState()
            if(userData.lastWordleIsSolved) {
                setGameStatus("solved")
            }else{
                setGameStatus("play")
            }
        }
    }, [userDataFetched])

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }
    
    if(loading){
      return (<Loading></Loading>)
    }

    return (
        <>{mobile ? <HeaderMobile/> : <Header/>}

        <div className="mt-16 md:mt-10 mb-[12rem] flex flex-col items-center justify-center">
            {/* <SubButton text="Wordle"/> */}
            <h2 className="manrope-body">username: <b>{userData.username}</b></h2>
            <h2 className="manrope-body">Wordle#<b>{curWordle.number}</b></h2>
            {gameStatus === "play" && curWordle != null && 
                <Wordle word={curWordle.word}
                onSignal={handleSignalFromWordle}
                onPanelResults={handlePanelResultsFromWordle}
                onPanelValues={handlePanelValuesFromWordle}
                lastState={lastState}
                lastSolved={lastWordleSolved}
                />}
            
            {gameStatus === "solved" && 
                <div className="w-[50vw] p-8 flex flex-col items-center justify-center gap-8">
                    <h2 className="manrope-h2 text-xl">{solvedMessages[Math.floor(Math.random() * solvedMessages.length)]}</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                    {!lastWordleSolved && <span><p className="manrope-h2">Score: </p><p className="manrope-h2 text-xl">+{score}!</p></span>}
                    <MainButton text="See Leaderboard" handleClick={()=> goToPage('/play/leaderboard')}/>
                </div>
            }

            {gameStatus === "failed" &&
                <div className="w-[50vw] p-8 flex flex-col items-center justify-center gap-8">
                    <h2 className="manrope-h2 text-xl">Yah.. coba lagi besok!</h2>
                    <ResultImage panelResults={curPanelResults} widthPixels={200}/>
                    <MainButton text="See Leaderboard" handleClick={()=> goToPage('/play/leaderboard')}/>
                </div>
            }
        </div>
        </>
    )
}