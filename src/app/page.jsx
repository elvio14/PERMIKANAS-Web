"use client"
import Header from "@/components/header"
import Home from "@/components/home"
import HomeMap from "@/components/homeMap"
import HomeEvents from "@/components/homeEvents"
import useIsMobile from "@/components/isMobile"
import HeaderMobile from "@/components/headerMobile"
import HomeMapMobile from "@/components/homeMapMobile"
import HomeMobile from "@/components/homeMobile"
import Loading from "@/components/loading"
import RegisterEvent from "@/components/registerEvent"

export default function App() {
  let mobile = useIsMobile()
  if (mobile === undefined){
    return (<div className="pb-[12rem]"><Loading/></div>)
  }
  
  return (
    <>
    {mobile ? 
    <div className="overflow-y-scroll overflow-x-hidden">
      <HeaderMobile active="home"></HeaderMobile>
      <HomeMobile></HomeMobile>
      <RegisterEvent></RegisterEvent>
      <HomeMapMobile></HomeMapMobile>
      <HomeEvents></HomeEvents>
    </div>
    //MOBILE
    : //----------------------------------------------------------------------------------------------------------------------------
    //DESKTOP
    <div className="w-[100vw]">
    <Header active="home"></Header>
    <Home/>
    <RegisterEvent />
    <HomeMap />
    <HomeEvents />
    </div>
    }
  </>
  )
}
