"use client"
import SubButton from "./subButton"
import { useState, useEffect } from "react"

export default function CommHomeComponent() {
    const [student, setStudent] = useState(0)
    const [city, setCity] = useState(0)
    const [sa, setSA] = useState(0)
    const [triggerAnimation, setTrigger] = useState(false)

    const targetStudent = 1500
    const targetCity = 7
    const targetSA = 8

    useEffect(() => {
        const incrementStudent = targetStudent / (1500 / 16) // Approximate 60 FPS
        const incrementCity = targetCity / (1500 / 16)
        const incrementSA = targetSA / (1500 / 16)
    
        const animateStudent = async () => {
            let currentStudent = 0;
            while (currentStudent < targetStudent) {
              await new Promise((resolve) => setTimeout(resolve, 16))
              currentStudent += incrementStudent
              setStudent((prev) => Math.ceil(Math.min(prev + incrementStudent, targetStudent)))
            }
        }

        const animateCity = async () => {
            let currentCity = 0;
            while (currentCity < targetCity) {
              await new Promise((resolve) => setTimeout(resolve, 200))
              currentCity += incrementCity
              setCity((prev) => Math.ceil(Math.min(prev + incrementCity, targetCity)))
            }
        }
        const animateSA = async () => {
            let currentSA = 0;
            while (currentSA < targetSA) {
              await new Promise((resolve) => setTimeout(resolve, 200))
              currentSA += incrementSA
              setSA((prev) => Math.ceil(Math.min(prev + incrementSA, targetSA)))
            }
        }

        if (triggerAnimation) animateStudent()
        if (triggerAnimation) animateCity()
        if (triggerAnimation) animateSA()
    }, [triggerAnimation])

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY >= 700 && !triggerAnimation){
                setTrigger(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <div className="grid grid-rows-3 h-[45vh] md:h-full z-20
                        px-4 py-8
                        md:px-[12rem] md:pb-[8rem] md:pt-[2rem] 
                        ">
            <div className="flex flex-col gap-4 justify-center">
                <SubButton text="Communities"/>
                <h2 className="manrope-h2 text-xl md:text-4xl text-[--main-7]">Building communities as homes<br></br>to Indonesian students abroad</h2>
            </div>
            <div className="flex flex-row mx-auto md:mx-0 gap-4 md:gap-8 h-[4rem] md:h-[10rem] text-[var(--main-5)]">
                <div className="bg-[var(--main)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">{student}+</h2>
                    <h3 className="text-[9px] md:text-base">Indonesian Students</h3>
                </div>
                <div className="bg-[var(--main)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">{city}+</h2>
                    <h3 className="text-[9px] md:text-base">Cities</h3>                        
                </div>
                <div className="bg-[var(--main)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">{sa}</h2>
                    <h3 className="text-[9px] md:text-base">Student Associations</h3>                        
                </div>
            </div>
            <div>
                <div className="my-2 md:my-[2rem] border-l-4 border-[var(--main-3)] pl-8 w-[85vw] md:w-[28vw]">
                    <b className="hidden md:block">Select the pins on the map to learn more.<br></br> </b>
                    <span> Across Canada, 8 active PERMIKA chapters bring Indonesian students together, with 1 chapter currently on hiatus.</span>
                </div>
            </div>
        </div>
    )
}