"use client"
import SubButton from "@/components/subButton"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import Header from "@/components/header"
import HeaderMobile from "@/components/headerMobile"
import Login from "@/components/wordle/login"

export default function PlayHome(){

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }
    return (
        <>
            {mobile ? <HeaderMobile/> : <Header/>}
            
            <div className="h-[100vh] mt-16 md:mt-2 mb-[12rem] flex flex-col items-center justify-center">
                <SubButton text="Wordle"/>
                <Login/>
            </div>
        </>
    )
}