"use client"
import { useRef, useEffect } from "react";
export default function Input({ value, onChange, isActive }){
    const handleChange = (e) => {
        const val = e.target.value;
        if (onChange) {
            onChange(val);
        }
    };
    const inputRef = useRef(null);

    useEffect(() => {
        if (isActive && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
            console.log("I'm active");
        }
    }, [isActive]);

    return (
        <div
            className="aspect-square w-[4rem] box-border bg-gray-100 border-2 border-red-800
            rounded-xl flex items-center justify-center"
        >
            <input
                ref={inputRef}
                type="text"
                maxLength={1}
                className="w-full h-full text-center bg-transparent outline-none"
                style={{ 
                    fontSize: '2rem', 
                    backgroundColor: isActive ? "lightblue" : "white"
                }}
                value={value}
                onChange={handleChange}
                tabIndex={-1}
                onMouseDown={e => e.preventDefault()}
            />
        </div>
    )
}