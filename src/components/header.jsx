"use client"
import {MainButton, SecondaryButton} from '@/components/button.jsx'
import Dropdown from './dropdown'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

export default function Header({active = "home"}){

    const [activePage, setActivePage] = useState("")

    const router = useRouter()

    const [scrollY, setScrollY] = useState(window.scrollY)
    const [dropdown, setDropdown] = useState(false)
    const [floater, setFloater] = useState(false)
    const [isFadingOut, setFadeOut] = useState(false)

    const resourceMouseEnter = () => setDropdown(true)
    const resourceMouseLeave = () => setDropdown(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
            if(window.scrollY >= 99){
                setFloater(true)
                setFadeOut(false)
            } else if(floater){
                setFadeOut(true)
                setTimeout(() => {
                    setFloater(false)
                    setFadeOut(false)
                }, 250)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }

    useEffect(()=> {
        setActivePage(active)
    }, [])


    return (
        <>
        <div className="w-full h-[4.2rem] bg-[var(--main-3)] grid grid-cols-[1fr_2fr_1fr] items-center shadow-md z-40">
            <div className='flex justify-center'>   
                <img style={{ borderRadius: '5rem'}} src="/permikanas_logo_white.svg" alt="Permkanas Logo" width={80}></img>
            </div>
            <div style={{paddingRight: '3rem'}}>
                <nav className="flex gap-4 justify-center">
                    <SecondaryButton text='Home' color='white' isActive={activePage == "home"} onClick={()=>goToPage("/")}></SecondaryButton>
                    <SecondaryButton text='About Us' color='white' isActive={activePage == "about"} onClick={()=>goToPage("/about")}></SecondaryButton>
                    <div onMouseEnter={resourceMouseEnter} onMouseLeave={resourceMouseLeave} className='relative'>
                        
                        {dropdown && <div className='absolute top-[2.5rem] pl-8 py-4 rounded-b-xl bg-[var(--main-3)] w-[14rem] text-white shadow-lg' onMouseEnter={resourceMouseEnter} onMouseLeave={resourceMouseLeave}>
                            <h3>Before & Upon Arrival</h3>
                            <h3 className='pl-4 py-2 cursor-pointer hover-bold' onClick={()=>goToPage("/resources/visa")}>Applying Visa</h3>
                            <h3 className='pl-4 py-2 cursor-pointer hover-bold' onClick={()=>goToPage("/resources/docs")}>Documents to Bring</h3>
                            <h3 className='pl-4 py-2 cursor-pointer hover-bold' onClick={()=>goToPage("/resources/lapor")}>Lapor Diri KJRI</h3>
                        </div>} 
                        <SecondaryButton text='Resources' color='white' hoverable={false}></SecondaryButton>
                        {dropdown && <div className='border-t-2 absolute w-[7rem]'></div>}
                    </div>
                    <SecondaryButton text='Events' color='white' isActive={activePage == "events"} onClick={()=>goToPage("/events")}></SecondaryButton>
                    <SecondaryButton text='Communities' color='white' isActive={activePage == "communities"} onClick={()=>goToPage("/communities ")}></SecondaryButton>

                </nav>
            </div>
            <div className="flex justify-center">
            <MainButton text='Contact Us'></MainButton>
            </div>
            <div className='fixed'>{scrollY} - {floater ?  "TRUE" : "FALSE"}</div>
        </div>
        {floater && 
        <div className={`fixed top-[1rem] left-1/2 -translate-x-1/2 bg-white py-[0.5rem] w-[50vw] rounded-full shadow-lg z-50
        ${isFadingOut ? "animate-fade-out opacity-0" : "animate-fade-in opacity-100"}`}>
            <nav className="flex gap-4 justify-center">
              <SecondaryButton text='Home' color='var(--main-7)' bgActive='#CD5A48' isActive={activePage == "home"} onClick={()=>goToPage("/")}></SecondaryButton>
              <SecondaryButton text='About Us' color='var(--main-7)' bgActive='#CD5A48' isActive={activePage == "about"} onClick={()=>goToPage("/about")}></SecondaryButton>
              <div onMouseEnter={resourceMouseEnter} onMouseLeave={resourceMouseLeave} className='relative'>
                        
                        {dropdown && <div className='absolute top-[2.5rem] pl-8 py-4 rounded-b-xl bg-white w-[14rem] text-black shadow-lg' onMouseEnter={resourceMouseEnter} onMouseLeave={resourceMouseLeave}>
                            <h3>Before & Upon Arrival</h3>
                            <h3 className='pl-4 py-2'>Applying Visa</h3>
                            <h3 className='pl-4 py-2'>Documents to Bring</h3>
                            <h3 className='pl-4 py-2'>Lapor Diri KJRI</h3>
                        </div>} 
                        <SecondaryButton text='Resources' color='var(--main-7)' hoverable={false}></SecondaryButton>
                        {dropdown && <div className='border-t-2 absolute w-[7rem]'></div>}
                    </div>
              <SecondaryButton text='Events' color='var(--main-7)' bgActive='#CD5A48' isActive={activePage == "events"} onClick={()=>goToPage("/events")}></SecondaryButton>
              <SecondaryButton text='Communities' color='var(--main-7)' bgActive='#CD5A48' isActive={activePage == "communities"} onClick={()=>goToPage("/communities ")}></SecondaryButton>
            </nav>
        </div>
        }
        </>
    )
}