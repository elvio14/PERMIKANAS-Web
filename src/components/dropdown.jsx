"use client"
import { useState, useRef, useEffect } from "react"
import { SecondaryButton } from "./button"

export default function DropdownGeneral({text = "Button", dropTexts= ["Drop1", "Drop2"], color = "var(--main-5)"}){

    const [isActive, setActive] = useState(false)

    const containerRef = useRef(null)

    useEffect(() => {
        const handleMouseEnter = () => setActive(true);
        const handleMouseLeave = () => setActive(false);
    
        const container = containerRef.current;
        if (container) {
          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);
        }
    
        return () => {
          const container = containerRef.current;
          if (container) {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
          }
        };
      }, [])

    return (
        <div ref={containerRef} className="relative">
            <SecondaryButton text={text} color={color} bgActive='#CD5A48' hoverable={false} ></SecondaryButton>

            {isActive && (
                <div className="absolute top-[2rem] shadow-lg left-0 w-[16rem] rounded-b-[2rem] bg-[var(--main-5)] p-4 text-[var(--main-7)] flex flex-col gap-4">
                {dropTexts.map((item, index) => (
                  <a key={index} style={{cursor: 'pointer'}}>{item}</a>
                ))}
            </div>
            )}  
        </div>
    )
}