"use client"
import Header from "@/components/header"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"

export default function Submitted(){
    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    return (
        <>
            {mobile ? <HeaderMobile/> : <Header/>}
            <div className="bg-gradient-to-br from-[var(--main-1)] flex flex-col items-center gap-8 md:pt-16 pt-32 pb-[12rem]">
                <div className="rounded-xl shadow-xl bg-white md:w-[50vw] flex flex-col items-center gap-8 md:py-8 md:mb-16 p-8">
                    <h1 className="manrope-h2 md:text-2xl">Thank you for joining us!</h1>
                    <span>Your data has been submitted.</span>
                </div>
            </div>
        </>
    )
}