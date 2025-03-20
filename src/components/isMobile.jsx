"use client"
import { useState,useEffect } from "react";

export default function useIsMobile(){
    const [isMobile, setIsMobile] = useState(undefined)

    useEffect(() => {
      if (typeof window === "undefined") return
      const handleResize = () => {
        setIsMobile(window.innerWidth < 850)
      }
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  
    return isMobile
}