"use client"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import Header from "@/components/header"
import HeaderMobile from "@/components/headerMobile"
import Leaderboard from "@/components/wordle/leaderboard"

export default function LeaderboardPage(){
    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    return (
        <>{mobile ? <HeaderMobile/> : <Header/>}
            <div className="h-[100vh]">
                <Leaderboard/>
            </div>
        </>
    )
}