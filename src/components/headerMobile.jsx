import { useState } from "react"

export default function HeaderMobile() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-[var(--main-3)] z-40 grid grid-cols-[1fr_6fr_1fr] items-center">
                <img src="/permikanas_logo_white.svg" alt="Permkanas Logo" className="w-[4rem] ml-8 py-2"></img>
                <div></div>
                <img src="/menu.svg" alt="menu button" className="h-[2.5rem]" onClick={() => setShowMenu(true)}/>
            </div>
            {showMenu &&
            <div>
                <div className="fixed h-full ml-[4rem] w-full shadow-xl bg-[var(--main-1)] z-50 p-8 flex flex-col gap-8">
                    <h1 className="manrope-h2 text-4xl text-right mr-16" onClick={() => setShowMenu(false)}>{'>'}</h1>
                    <h1 className="manrope-h2 text-2xl">Home</h1>
                    <h1 className="manrope-h2 text-2xl">About Us</h1>
                    <h1 className="manrope-h2 text-2xl">Resources</h1>
                    <h1 className="manrope-h2 text-2xl">Events</h1>
                    <h1 className="manrope-h2 text-2xl">Communities</h1>
                </div>
            </div>}
        </>
    )
}