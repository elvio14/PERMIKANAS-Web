"use client"
import SubButton from "@/components/subButton"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import Header from "@/components/header"
import HeaderMobile from "@/components/headerMobile"
import Login from "@/components/wordle/login"
import { useRouter } from "next/navigation"

export default function PlayHome(){
    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path)
    }

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    return (
        <>
            {mobile ? <HeaderMobile active="wordle"/> : <Header active="wordle"/>}
            <div className="h-[100vh] mt-16 md:mt-2 mb-[12rem] flex flex-col gap-4 items-center justify-center">
                <SubButton text="Wordle"/>
                <a onClick={()=> goToPage("/play/leaderboard")}><h2>{"View Leaderboard >"}</h2></a>
                <Login/>
            </div>
        </>
    )
}