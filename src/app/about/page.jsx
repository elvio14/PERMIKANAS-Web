"use client"
import Header from "@/components/header"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import EventsBanner from "@/components/eventsBanner"
import EventsPast from "@/components/eventsPast"
import EventsUpcoming from "@/components/eventsUpcoming"

export default function About() {
      let mobile = useIsMobile()
      if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
      } 

    return (
        <>
        {mobile ? <HeaderMobile active="about"></HeaderMobile> : <Header active="about"></Header>}
        </>
    )
}