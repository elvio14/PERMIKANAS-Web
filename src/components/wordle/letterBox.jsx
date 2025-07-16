"use client"
import { useRef, useEffect } from "react";
import { ResultType } from "./resultTypes";

export default function LetterBox({ value, onChange, isActive, rowFilled, result ,notFound }) {

    return (
        <div
            className="aspect-square w-[4rem] box-border border-2 border-red-800
                    rounded-xl text-center flex items-center justify-center bg-transparent outline-none"
            style={{
                fontSize: '2rem',
                backgroundColor:
                    notFound ? "red" :
                    result === ResultType.CORRECT ? "darkseagreen" :
                    result === ResultType.PRESENT ? "sandybrown" :
                    result === ResultType.ABSENT ? "dimgray" :
                    isActive ? "white" :
                    rowFilled ? "snow" :
                    "papayawhip"
            }}
        >{value}</div>
    );
}