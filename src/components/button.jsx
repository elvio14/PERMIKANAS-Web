"use client"
import { useState, useRef, useEffect } from "react"

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `${r}, ${g}, ${b}`; 
}

export const MainButton = ({text = "Button", bgColor = "white", color="var(--main-4)", borderColor = "none", px = "1.2rem", handleClick}) => {
    const [isHovered, setHovered] = useState(false)
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleClick(true)}
        className="px-4 py-2 transition duration-300"
        style={{
            backgroundColor: (isHovered ? "#CD5A48" : bgColor), 
            borderRadius: "2rem",
            border: "solid 1px",
            borderColor: borderColor,
            color: (isHovered ? "white" : color),
            fontWeight: 800,
            paddingLeft: px,
            paddingRight: px
        }}>{text}</button>
    )
}

export const SecondaryButton = ({text = "Button", color = "white", bgActive = "#FFFFFF", weight = "auto", isActive = false, hoverable = true, onClick}) => {
    const [isHovered, setHovered] = useState(false)
    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button 
                onClick={onClick}
                className="px-4 py-2 transition duration-300"
                style={{
                    backgroundColor: (isActive
                      ? `rgba(${hexToRgb(bgActive)}, 0.5)`
                      : (isHovered && hoverable)
                      ? `rgba(${hexToRgb(bgActive)}, 0.3)`
                      : "transparent"),
                    borderRadius: "2rem", 
                    border: "transparent",
                    color: color,
                    width: "auto",
                    fontWeight: (isActive ? 800 : weight)
                }}>{text}</button>
        </div>
    )
}
