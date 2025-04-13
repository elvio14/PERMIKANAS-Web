"use client"
import { useRouter } from "next/navigation"

export default function HomeMobile() {
    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path) 
    }
    return (
        <div className="flex flex-col gap-4 items-center mb-16 text-center">  
            <div className="grid mx-16 mt-32">
                <img className="row-start-1 col-start-1 ml-auto" src="/home_temples_bg_mobile.svg" alt="temples bg"/>
                <img className="row-start-1 col-start-1 mt-[4rem]" src="/home_temples.svg" alt="temples"/>
                <img className="row-start-1 col-start-1 ml-auto h-[8rem] mt-4" src="/home_temples_leaf.svg" alt="temples leaf"/>
            </div>
            <h1 className="font-a text-4xl text-[var(--main-5)]">Permika Nasional</h1>
            <h2 className="manrope-h2 text-xl my-2 text-[var(--main-5)]">"Unite, Ignite, and Reach New Heights”</h2>
            <div className="mx-8 text-center">PERMIKA Nasional is more than a network—it’s a home away from home for Indonesian students across Canada. We foster academic growth, professional excellence, and lifelong connections while celebrating our rich culture and heritage. From your first step in Canada to building your future, we are here to empower, support, and connect every Indonesian student.</div>
            <button onClick={() => goToPage("/form")} className="text-[var(--main-5)] mt-4 px-8 py-3 rounded-full border-[1px] border-[var(--main-5)]">Join Our Community</button>
        </div>
    )
}