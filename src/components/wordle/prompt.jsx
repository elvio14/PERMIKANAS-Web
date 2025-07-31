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
        <div className="py-2 flex flex-col gap-1 justify-center text-center">
            <h2 className="manrope-h2 text-2xl">{prompt}</h2>
        </div>
    )
}