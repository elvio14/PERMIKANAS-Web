import { useState } from "react"
import { useRouter } from "next/navigation"

export default function HeaderMobile() {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-[var(--main-3)] z-40 grid grid-cols-[1fr_6fr_1fr] items-center">
                <img src="/permikanas_logo_white.svg" alt="Permkanas Logo" className="w-[4rem] ml-8 py-2"></img>
                <div></div>
                <img src="/menu.svg" alt="menu button" className="h-[2.5rem]" onClick={() => setShowMenu(true)}/>
            </div>
            {showMenu &&
            <div>
                <div className="shadow-[10px_0_15px_rgba(0,0,0,0.25)] fixed h-full ml-[4rem] w-full bg-[var(--main-3)] z-50 p-8 flex flex-col gap-8 overflow-visible">
                    <h1 className="text-4xl text-[var(--main-1)] text-right mr-16" onClick={() => setShowMenu(false)}>{'>'}</h1>
                    <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/")}>Home</h1>
                    <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/about")}>About Us</h1>
                    <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/resources")}>Resources</h1>
                    <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/events")}>Events</h1>
                    <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/communities")}>Communities</h1>
                </div>
            </div>}
        </>
    )
}