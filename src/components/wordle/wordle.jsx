"use client"
import React, { useEffect, useRef, useState } from "react"
import Input from "./input"

export default function Wordle(){
    const word = "BAKMI" //THE WORD TO GUESS

    let panels = Array.from({ length: 6 }, () => Array(5).fill(''))

    const [activePanel, setActive] = useState({ row: 0, col: 0 })

    const [panelValues, setPanelValues] = useState(Array.from({ length: 6 }, () => Array(5).fill('')))

    const handleInputChange = (row, col, value) => {
        setPanelValues(prev => {
            const updated = prev.map(arr => [...arr])
            updated[row][col] = value
            return updated
        })
        if(col <= 4){//Case: last panel in row{
            setActive({row: row, col: col+1})
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Backspace" && panelValues[activePanel.row][activePanel.col] === '') {
            setPanelValues(prev => {
                const updated = prev.map(arr => [...arr])
                let { row, col } = activePanel
                if (col > 0 || (col === 0 && updated[row][col])) {
                    if (col > 0) {
                        col = col - 1
                    }
                    updated[row][col] = ''
                }
                return updated  
            })
            setActive(prev => {
                let { row, col } = prev
                if (col > 0 || (col === 0 && panelValues[row][col])) {
                    if (col > 0) {
                        col = col - 1
                    }
                }
                return { row, col }
            })
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <div className="flex flex-col gap-2 bg-red-900 m-4 w-fit" >
            {
                panelValues.map((row, rowIndex) => (
                    <div className="flex flex-row gap-2 m-2" key={rowIndex}>
                        {row.map((val, colIndex) => (
                            <Input
                                key={colIndex}
                                value={val}
                                onChange={val => handleInputChange(rowIndex, colIndex, val)}
                                isActive={activePanel.row === rowIndex && activePanel.col === colIndex}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}