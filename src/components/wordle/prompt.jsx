import { useEffect, useState } from "react"

export default function Prompt() {
    const [prompt, setPrompt] = useState("a")

    const awal = [
        "Apa hayoo...",
        "Tebak kata!",
        "Coba tebak!"
    ]

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * awal.length)
        setPrompt(awal[randomIndex])
    }, [])

    return (
        <div className="py-2 md:py-4 flex flex-col gap-2 justify-center text-center">
            <h2 className="manrope-h2 text-4xl">{prompt}</h2>
            <p>{`( Kata Bahasa Indonesia )`}</p>
        </div>
    )
}