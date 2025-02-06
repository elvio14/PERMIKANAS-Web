"use client"
import {MainButton, SecondaryButton} from '@/components/button.jsx'
import Dropdown from './dropdown'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { ref } from 'vue'

export default function Header({active = "home"}){

    const [activePage, setActivePage] = useState("")

    const router = useRouter()

    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }

    useEffect(()=> {
        setActivePage(active)
    }, [])

    return (
        <div className="w-full h-[4.2rem] bg-[var(--main-3)] grid grid-cols-[1fr_2fr_1fr] items-center shadow-md">
            <div className='flex justify-center'>   
                <img style={{ borderRadius: '5rem'}} src="/permikanas_logo.png" alt="Permkanas Logo" width={80}></img>
            </div>
            <div style={{paddingRight: '3rem'}}>
                <nav className="flex gap-4 justify-center">
                  <SecondaryButton text='Home' color='white' isActive={activePage == "home"} onClick={()=>goToPage("/")}></SecondaryButton>
                  <SecondaryButton text='About Us' color='white' isActive={activePage == "about"} onClick={()=>goToPage("/about")}></SecondaryButton>
                  <Dropdown onMouseEnter={() => console.log('Mouse enter parent')}
                    text='Resources'
                    dropTexts={['Before & Upon Arrival', 'Survival Tips']}
                    color='white'
                    isActive={activePage == "resources"}
                    ></Dropdown>
                  <SecondaryButton text='Events' color='white' isActive={activePage == "events"} onClick={()=>goToPage("/events")}></SecondaryButton>
                  <SecondaryButton text='Communities' color='white' isActive={activePage == "communities"} onClick={()=>goToPage("/communities")}></SecondaryButton>
                </nav>
            </div>
            <div className="flex justify-center">
            <MainButton text='Contact Us'></MainButton>
            </div>
        </div>
    )
}