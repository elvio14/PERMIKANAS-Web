import { useState,useEffect } from "react";

export default function isMobile(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 850)
      }
      
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  
    return isMobile
}