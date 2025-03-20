"use client"
import FooterJoin from "./footerJoin"
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import useIsMobile from "./isMobile"

export default function Footer() {
    let mobile = useIsMobile()
    const router = useRouter()
    const [copyAlert, showCopyAlert] = useState(false)
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
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
        {mobile ?
        <div></div>
        ://------------------------------------------------------------------------------------------------------------------
        <div>
            <FooterJoin/>
            <div className="bg-[var(--main-7)] px-[12rem] text-[var(--main-1)] mb-auto z-0 pt-[4rem]">
                <div className="h-[18rem] gap-8 grid grid-cols-[5fr_1.2fr_1.2fr_2.8fr_2.8fr_2.8fr]">
                    <div className="flex justify-center items-center" >
                        <img className="h-[8rem]" src="/permikanas_logo_white.svg" alt="permikanas logo" />
                    </div>
                    <div className="flex flex-col mt-28">
                        <p className="manrope-body-bold">About Us</p>
                        <p className="text-button">Visi Misi</p>
                        <p className="text-button">Our Team</p>
                    </div>
                    <div className="flex flex-col mt-28">
                        <p className="manrope-body-bold">Events</p>
                        <p className="text-button">Internal</p>
                        <p className="text-button">External</p>
                    </div>
                    <div className="flex flex-col mt-28">
                        <p className="manrope-body-bold">Resources</p>
                        <p className="text-button">Before & Upon Arrival</p>
                        <p className="text-button">Survival Tips</p>
                    </div>
                    <div className="flex flex-col mt-28">
                        <p className="manrope-body-bold">Communities</p>
                        <p className="text-button">Permika Chapters</p>
                        <p className="text-button">ISA/PPI Canada</p>
                    </div>
                    <div className="flex flex-col mt-28">
                        <p className="manrope-body-bold">Contact Us</p>
                        <div className="relative">
                        <p className="text-button flex items-center" onClick={clickContact}><img src="/mail.svg" alt="mail icon" className="mr-1"/>permikanas@gmail.com </p>
                        {copyAlert && <div className="absolute left-full bg-[var(--main-1)] text-black p-2 rounded-b-lg rounded-r-lg">Copied!</div>}
                        </div>
                        <p className="mt-2 flex items-center">
                            <a href="https://www.facebook.com/permikanasional/" target="_blank"><img src="/Facebook.svg" alt="mail icon" className="mr-2 cursor-pointer hover:text-[var(--main-3)]"/></a>
                            <a href="https://www.instagram.com/permikanasional/" target="_blank"><img src="/Instagram.svg" alt="mail icon" className="mr-2 cursor-pointer"/></a>
                            <a href="https://www.linkedin.com/company/permikanasional/" target="_blank"><img src="/Linkedin.svg" alt="mail icon" className="mr-1 cursor-pointer"/></a>
                        </p>
                    </div>
                </div>
                <div className="h-[5rem] border-t border-t-[var(--main-1)] py-4">
                 @ Copyright by Web Team PERMIKANAS 2024/2025 All rights reserved
                </div>
            </div>
        </div>
        }
        </>
    )
}