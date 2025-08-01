"use client"
import SubButton from "./subButton"
import Slide from "./slide"
import { useState, useEffect } from "react"

export default function HomeEvents() {

    const slides = [
        {title: "PERMIKA Summit 2024", date: "September 6-8, 2024", image: "/PERMIKA_Summit_2024.jpg", isActive: true},
        {title: "PESTA 2024", date: "August 17, 2024", image: "/PESTA.png", isActive: false},
        {title: "Warung Keliling 2025", date: "2025", image: "/warung_2025.png", isActive: false}
    ]

    const [activeSlide, setActiveSlide] = useState(0)

    const handleMouseEnter = (index) => {
        setActiveSlide(index)
    }

    return (
        <div className="h-full pt-[6rem] md:pb-[12rem] mb-24">
            <div className="md:px-[12rem] px-8 flex flex-col gap-8 text-center justify-center items-center">
                <SubButton text="Events"></SubButton>
                <h2 className="manrope-h2 md:text-4xl text-2xl text-[--main-7]">Connecting Indonesian students accross Canada</h2>
                <span className="md:w-[50vw] text-center">We host fun, informative, and impactful social events, that foster our community of Indonesian students. Stay tuned for the next one!</span>
            </div>
            <div className="flex space-x-4 md:justify-center md:px-0 overflow-x-scroll px-8 py-8">
                {slides.map((slide, index) => {
                    return (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onTouchStart={() => handleMouseEnter(index)}
                    >
                        <Slide
                            title={slide.title}
                            date={slide.date}
                            image={slide.image}
                            isActive={index === activeSlide}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}