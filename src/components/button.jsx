"use client"
import { useState, useRef, useEffect } from "react"

export const MainButton = ({text = "Button", bgColor = "white", color="var(--main-4)"}) => {
    const [isActive, setActive] = useState(false)

    return (
        <button
        className="px-4 py-2"
        style={{
            backgroundColor: bgColor, 
            borderRadius: "2rem",
            color: color,
            fontWeight: 800,
            paddingLeft: "1.2rem",
            paddingRight: "1.2rem"
        }}>{text}</button>
    )
}

export const SecondaryButton = ({text = "Button", color = "var(--main-5)", weight = "auto", isActive = false, onClick}) => {
    const [isHovered, setHovered] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);
    
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
        <div ref={containerRef}>
            <button 
                onClick={onClick}
                className="px-4 py-2"
                style={{
                    background: (isActive ? "rgba(255, 255, 255, 0.3)" : "transparent"),
                    borderRadius: "2rem", 
                    border: "transparent",
                    color: (isHovered ? "var(--main-5)" : color),
                    width: "auto",
                    fontWeight: weight
                }}>{text}</button>
        </div>

    )
}
