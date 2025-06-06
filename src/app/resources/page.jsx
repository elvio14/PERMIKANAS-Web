"use client"
import Header from "@/components/header"
import NotFound from "../not-found"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"

export default function Resources() {
      let mobile = useIsMobile()
      if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
      } 

    return (
        <>
        {mobile ? <HeaderMobile active="resources"></HeaderMobile> : <Header active="resources"></Header>}
        <NotFound></NotFound>
        </>
    )
}