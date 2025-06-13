"use client"
import React, { useEffect, useRef, useState } from "react"
import Input from "./input"

export default function Wordle({word}){
    const [activeRow, setActiveRow] = useState(0)
    const [activeCol, setActiveCol] = useState(0)
    const [filledRow, setFilledRow] = useState(null)   //Last filled row
    const [panelValues, setPanelValues] = useState(Array.from({ length: 6 }, () => Array(5).fill('')))
    const [panelResults, setPanelResults] = useState(Array.from({ length: 6 }, () => Array(5).fill('')))
    const [notFoundRow, setNotFoundRow] = useState(null)
    const [kbbiSet, setKbbiSet] = useState(new Set())

    const [wordNotFound, setWordNotFound] = useState(false)
    useEffect(()=> {
        if(wordNotFound){   
            setTimeout(()=> {
                setWordNotFound(false)
                setNotFoundRow(null)
            },1000)
        }
    },[wordNotFound])

    const checkAnswer = (row) => {
        console.log(word)

        let answer = '';
        panelValues[row].forEach((value) => {
            answer += value
        })

        if (!kbbiSet.has(answer)) {
            console.log(answer + " not found in KBBI set");
            setWordNotFound(true)
            setNotFoundRow(row)
            return;
        }

        let answerCorrect = true
        answer.split('').forEach((value, index) => {
            if (value === word.charAt(index)) {      //Letter is in correct place
                console.log("same hit")
                setPanelResults(prev => {
                    const updated = prev.map(arr => [...arr]);
                    updated[row][index] = "correct";
                    console.log(updated); // Log the updated state immediately
                    return updated;
                });
            } else if (word.includes(value)) {    //Letter is present but in different place
                setPanelResults(prev => {
                    const updated = prev.map(arr => [...arr]);
                    updated[row][index] = "present";
                    console.log(updated)
                    answerCorrect = false
                    return updated;
                });
            } else {   //Letter is absent in the word
                setPanelResults(prev => {
                    const updated = prev.map(arr => [...arr]);
                    updated[row][index] = "absent";
                    console.log(updated)
                    answerCorrect = false
                    return updated;
                });
            }
        });

        if(answerCorrect){
            setActiveRow(Math.min(row+1, 5))
            setActiveCol(0)
        }

    }

    const handleInputChange = (row, col, value) => {
        setPanelValues(prev => {
            const updated = prev.map(arr => [...arr])
            updated[row][col] = value
            return updated
        })
        if(value === ""){
            setActiveCol(Math.max(0, col - 1))
            setPanelValues(prev => {
                const updated = prev.map(arr => [...arr])
                updated[row][col-1] = ''
                return updated
            })
        }else
        if(col < 5){
            setActiveCol(col+1)
        }

        if (col === 4 && value !== "") {   // Last column filled with a non-empty value
            setFilledRow(row);
            console.log("Filled row updated");
        }
    }
    const handleKeyDown = (e) => {
        if (e.key.toLowerCase() === "enter" && filledRow !== null) {
            console.log("Enter key pressed");
            checkAnswer(filledRow);
        }
    }

    useEffect(() => {
        const handleKeyDownWrapper = (e) => handleKeyDown(e);
        window.addEventListener("keydown", handleKeyDownWrapper);
        return () => window.removeEventListener("keydown", handleKeyDownWrapper);
    }, [filledRow])

    const preventFocusLoss = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        document.addEventListener("mousedown", preventFocusLoss);

        fetch('/kata5huruf.txt')
            .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            return response.text();
            })
            .then(text => {
            const tokens = text.split('\n');
            setKbbiSet(new Set(tokens));
            console.log("KBBI set added");
            console.log(kbbiSet);
            })
            .catch(err => console.error("Error fetching KBBI data:", err));
        
        
        return () => document.removeEventListener("mousedown", preventFocusLoss);
    }, []);

    return (
        <div className="flex flex-col gap-1 m-4 w-fit" >
            {
                panelValues.map((row, rowIndex) => (
                    <div className="flex flex-row gap-1" key={rowIndex}>
                        {row.map((val, colIndex) => (
                            <Input
                                key={colIndex}
                                value={val}
                                onChange={val => handleInputChange(rowIndex, colIndex, val)}
                                isActive={activeRow === rowIndex && activeCol === colIndex}
                                rowFilled={filledRow === rowIndex}
                                result={panelResults[rowIndex][colIndex]}
                                notFound={notFoundRow === rowIndex}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}