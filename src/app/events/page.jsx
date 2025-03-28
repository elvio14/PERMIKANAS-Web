"use client"
import Header from "@/components/header"
import NotFound from "../not-found"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"

export default function Events() {
      let mobile = useIsMobile()
      if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
      } 

    return (
        <>
        {mobile ? <HeaderMobile></HeaderMobile> : <Header active="events"></Header>}
        <NotFound></NotFound>
        </>
    )
}