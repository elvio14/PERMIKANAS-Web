"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { MainButton } from "./button"

export default function HeaderMobile({active = ""}) {
    const [showMenu, setShowMenu] = useState(false)
    const [copyAlert, showCopyAlert] = useState(false)
    const router = useRouter()
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }

    const [openRes, setOpenRes] = useState(false)
    const toggleRes = () => {
        setOpenRes(!openRes)
    }

    const clickContact = async ()=> {
        // COPY EMAIL
        try{
          const text = "contact.permikanasional@gmail.com"
          await navigator.clipboard.writeText(text)
          showCopyAlert(true)
        }catch(err){
          console.error(err)
        }
        
        // POPUP ALERT for 5s
        setTimeout(()=>{
          showCopyAlert(false)
        }, 5000)
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-[var(--main-3)] z-40 grid grid-cols-[1fr_6fr_1fr] items-center">
                <img onClick={()=>goToPage("/")} src="/permikanas_logo_white.svg" alt="Permkanas Logo" className="w-[4rem] ml-8 py-2"></img>
                <div></div>
                <img src="/menu.svg" alt="menu button" className="h-[2.5rem]" onClick={() => setShowMenu(true)}/>
            </div>
            {showMenu &&
            <div className="w-full">
                <div className="shadow-[10px_0_15px_rgba(0,0,0,0.25)] fixed h-full ml-[15vw] w-[85vw] bg-[var(--main-3)] z-50 py-8 flex flex-col gap-1 overflow-visible">
                    <div className="p-4">
                        <h1 className="text-4xl text-[var(--main-1)] text-right pr-2" onClick={() => setShowMenu(false)}>{'>'}</h1>
                    </div>
                    <div className={`p-4 ${active == 'home' ? "bg-[var(--main-3-b)]" : "bg-transparent"}`}>
                        <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/")}>Home</h1>
                    </div>
                    <div className={`p-4 ${active == 'about' ? "bg-[var(--main-3-b)]" : "bg-transparent"}`}>
                        <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/about")}>About</h1>
                    </div>
                    <div className={`p-4 ${active == 'resources' ? "bg-[var(--main-3-b)]" : "bg-transparent"}`}>
                        <h1 className="text-3xl text-[var(--main-1)]" onClick={() => toggleRes()}>Resources</h1>
                        {openRes &&
                            <div className="p-4 flex flex-col gap-4">
                                {/* <h2 className="text-2xl text-[var(--main-1)]" onClick={() => goToPage("/resources/visa")}>Applying Visa</h2> */}
                                <h2 className="text-2xl text-[var(--main-1)]" onClick={() => goToPage("/resources/docs")}>Documents to Bring</h2>
                                <h2 className="text-2xl text-[var(--main-1)]" onClick={() => goToPage("/resources/lapor")}>Lapor KJRI</h2>
                            </div>
                        }
                    </div>
                    <div className={`p-4 ${active == 'events' ? "bg-[var(--main-3-b)]" : "bg-transparent"}`}>
                        <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/events")}>Events</h1>
                    </div>
                    <div className={`p-4 ${active == 'communities' ? "bg-[var(--main-3-b)]" : "bg-transparent"}`}>
                        <h1 className="text-3xl text-[var(--main-1)]" onClick={() => goToPage("/communities")}>Communities</h1>
                    </div>
                    <div className="mt-auto flex flex-col items-center">
                        {copyAlert && <p className="text-[var(--main-1)] p-2">Email address copied!</p>}
                        <button onClick={() => clickContact()} className="bg-[var(--main-1)] rounded-full py-2 px-16 font-bold text-[var(--main-5)] text-xl">Contact Us</button>
                    </div>
                </div>
            </div>}
        </>
    )
}