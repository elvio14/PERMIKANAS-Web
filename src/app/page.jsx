"use client"
import Header from "@/components/header"
import HomeMap from "@/components/homeMap"
import HomeEvents from "@/components/homeEvents"
import useIsMobile from "@/components/isMobile"
import HeaderMobile from "@/components/headerMobile"
import HomeMapMobile from "@/components/homeMapMobile"
import HomeMobile from "@/components/homeMobile"
import Loading from "@/components/loading"
import { useRouter } from "next/navigation"
//import Sponsor from "@/components/sponsor"

export default function Home() {
  let mobile = useIsMobile()
  if (mobile === undefined){
    return (<div className="pb-[12rem]"><Loading/></div>)
  }

  const router = useRouter()
  const goToPage = (path) => {
    console.log("Running goToPage " + path)
    router.push(path) 
  }
  
  return (
    <>
    {mobile ? 
    <div className="overflow-y-scroll overflow-x-hidden">
      <HeaderMobile active="home"></HeaderMobile>
      <HomeMobile></HomeMobile>
      <HomeMapMobile></HomeMapMobile>
      <HomeEvents></HomeEvents>
      {/* <Sponsor></Sponsor> */}
    </div>
    //MOBILE
    : //----------------------------------------------------------------------------------------------------------------------------
    //DESKTOP
    <div className="w-[100vw]">
    <Header active="home"></Header>
    <div className="flex flex-col items-center overflow-x-hidden z-0">
      {/* Home */}
      <div className="w-[100vw] grid grid-cols-[1fr_1fr] items-center my-[5rem]">
        <div className="pl-[12rem]">
          <img className="ml-[-1.1rem]" src="/home_title.png" alt="title permika nasional" />
          <div>
            <h2 className="manrope-h2 text-xl my-2 text-[var(--main-5)]">"Unite, Ignite, and Reach New Heights”</h2>
            <p>PERMIKA Nasional is more than a network—it’s a home away from home for Indonesian students across Canada. We foster academic growth, professional excellence, and lifelong connections while celebrating our rich culture and heritage. From your first step in Canada to building your future, we are here to empower, support, and connect every Indonesian student.</p>
          </div>
          <button onClick={() => goToPage("/form")} className="text-[var(--main-5)] mt-4 px-8 py-3 rounded-full border-solid border-2 border-[var(--main-5)] hover:bg-[var(--main-5)] hover:text-white">Join Our Community</button>
        </div>
        <div className="grid">
          <img className="row-start-1 col-start-1 ml-auto mt-[4.2rem]" src="/home_temples_bg.svg" alt="temples bg"/>
          <img className="row-start-1 col-start-1" src="/home_temples.svg" alt="temples"/>
          <img className="row-start-1 col-start-1 ml-auto" src="/home_temples_leaf.svg" alt="temples leaf"/>
        </div>
      </div>
    </div>
    <HomeMap />
    <HomeEvents />
    {/* <Sponsor /> */}
    </div>
    }
  </>
  )
}
