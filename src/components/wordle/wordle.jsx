"use client"
import React, { useEffect,useState } from "react"
import { ResultType } from "./resultTypes"
import LetterBox from "./letterBox"
import Keyboard from "./keyboard"
import Prompt from "./prompt"

export default function Wordle({word, onSignal, onPanelResults, onPanelValues, lastState = null}){
    const [activeRow, setActiveRow] = useState(0)
    const [activeCol, setActiveCol] = useState(0)
    const [filledRow, setFilledRow] = useState(null)   //Last filled row
    const [panelValues, setPanelValues] = useState(Array.from({ length: 6 }, () => Array(5).fill("")))
    const [panelResults, setPanelResults] = useState(Array.from({ length: 6 }, () => Array(5).fill(ResultType.BLANK)))
    const [notFoundRow, setNotFoundRow] = useState(null)
    const [kbbiSet, setKbbiSet] = useState(new Set())
    const [kbbiAdded, setKBBIAdded] = useState(false)
    const [keyReq, setKeyReg] = useState(null)
    const [lastStateDone, setLastStateDone] = useState(false)

    const [wordNotFound, setWordNotFound] = useState(false)
    useEffect(()=> {
        if(wordNotFound){   
            setTimeout(()=> {
                setWordNotFound(false)
                setNotFoundRow(null)
            },1000)
        }
    },[wordNotFound])

    const sendReqToKeyboard = (req) => {
        console.log(req)
        setKeyReg(req)
    }

    const checkAnswer = (row) => {
        onPanelValues(panelValues)
        let answer = '';
        let answerSet = new Set()
        let hasBlanks = false
        panelValues[row].forEach((value) => {
            answer += value
        })
        answer = answer.toLocaleLowerCase()
        if (!kbbiSet.has(answer) && !hasBlanks) {
            console.log(answer + " not found in KBBI set");
            setWordNotFound(true)
            setNotFoundRow(row)
            return;
        }
        let keyboardRequest = []
        answer.split('').forEach((value, index) => {
            let updated = panelResults
            if (value === word.charAt(index)) {      //Letter is in correct place
                console.log("same hit")
                updated[row][index] = ResultType.CORRECT;
                console.log(updated);
                keyboardRequest.push({targetKey: value, newStatus: ResultType.CORRECT})
            } else if (word.includes(value) && !answerSet.has(value)) {    //Letter is present but in different place
                updated[row][index] = ResultType.PRESENT;
                console.log(updated)
                keyboardRequest.push({targetKey: value, newStatus: ResultType.PRESENT})
            } else {   //Letter is absent in the word
                updated[row][index] = ResultType.ABSENT;
                console.log(updated)
                keyboardRequest.push({targetKey: value, newStatus: ResultType.ABSENT})
            }
            setPanelResults(updated)
            answerSet.add(value)
        });
        if(word === answer){
            onPanelResults(panelResults)
            onSignal("solved")
            return
        }
        if(row > 4){    //Case: on last row
            onPanelResults(panelResults)
            onSignal("failed")
            return
        }else{
            setActiveRow(row+1)
            setActiveCol(0)
        }
        sendReqToKeyboard(keyboardRequest)
    }

    const handleKeyClick = (key) => {
        console.log("Parent got key: " + key)

        if(key ==="ENTER"){
            if(panelValues[activeRow][4] !== ""){
                checkAnswer(activeRow)
            }
            return
        }
        
        let updated = panelValues.map(row => [...row])
        
        if(key ==="DEL"){
            let isFilled = 1
            if(updated[activeRow][activeCol] !== ""){
                isFilled = 0
            }
            const prev = Math.max(0,activeCol-isFilled)
            updated[activeRow][prev] = ""
            setActiveCol(prev)
            setPanelValues(updated)
            return
        }

        updated[activeRow][activeCol] = key
        setPanelValues(updated)
        if (activeCol === 4) {    // If at last box
            setFilledRow(activeRow);
            console.log("Filled row updated");
        }else
        if(activeCol < 4){
            setActiveCol(activeCol+1)
        }
    }

    const handleLastState = () => {
        if(lastState !== null && lastState !== "[]"){
            console.log(lastState)
            setPanelValues(lastState)
        }
    }

    const handleLastStateCheck = () => {
        for(let i = 0; i < 6; i++){
            console.log("PanelValues[i][0] = " + panelValues[i][0])
            if(panelValues[i][0] === ''){
                break
            }
            console.log("Check answer " + i)
            checkAnswer(i)
        }
    }

    useEffect(() => {
        fetch('/kata5huruf.txt')
            .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
            }
            return response.text()
            })
            .then(text => {
            const tokens = text.split('\n')
            setKbbiSet(new Set(tokens))
            console.log("KBBI set added")
            console.log(kbbiSet)
            setKBBIAdded(true)
            })
            .catch(err => console.error("Error fetching KBBI data:", err))
    }, [])

    useEffect(() => {
        console.log("Panel values updated." + panelValues)
    },[panelValues])

    useEffect(() => {
        console.log("Wodle last state: " + lastState)
        if(lastState !== null && kbbiAdded){
            handleLastState()
            setLastStateDone(true)
        }
    }, [lastState, kbbiAdded])

    useEffect(()=> {
        if(lastStateDone){
            handleLastStateCheck()
        }
    }, [lastStateDone])

    return (
        <div className="flex flex-col gap-1 mb-4 w-fit items-center" >
            <Prompt />
            {
                panelValues.map((row, rowIndex) => (
                    <div className="flex flex-row gap-1" key={rowIndex}>
                        {row.map((val, colIndex) => (
                            <LetterBox
                                key={colIndex}
                                value={val}
                                isActive={activeRow === rowIndex && activeCol === colIndex}
                                rowFilled={filledRow === rowIndex}
                                result={panelResults[rowIndex][colIndex]}
                                notFound={notFoundRow === rowIndex}
                            />
                        ))}
                    </div>
                ))
            }

            <Keyboard
                request={keyReq}
                onKeyClicked={(key) => handleKeyClick(key)}
            />
        </div>
    )
}