"use client"
import Header from "@/components/header"
import { useRouter } from "next/navigation"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import PermikaForm from "@/components/permikaForm"

export default function Form() {
    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    return (
        <>
        {mobile ? <HeaderMobile/> : <Header/>}
        <PermikaForm></PermikaForm>
        </>
    )
}