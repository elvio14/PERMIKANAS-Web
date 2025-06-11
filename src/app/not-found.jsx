"use clients"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"

export default function NotFound() {
    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    if(mobile){
      return (
        <div className="flex flex-col items-center justify-center text-center gap-4 px-[2rem] text-[var(--main-5)] p-8 py-32 animate-scaleUp">
          <h1 className="manrope-h2 text-9xl">404</h1>
          <img src="mobile-not-found.png" alt="temples" />
          <h2 className="manrope-h2 text-4xl">You're Here Early!</h2>
          <h4 className="manrope-thin text-xl">This page is still under construction. <br></br> Please come back shortly!</h4>
        </div>
      )
    }
    return (
        <>
            <div className="relative z-0 md:h-[90vh] flex flex-col gap-4 p-8 pt-16  md:grid md:grid-cols-[1fr_1fr] md:px-[12rem] md:mb-[12rem] animate-scaleUp">
              <div className="flex flex-col items-center justify-center text-center gap-4 px-[5rem] text-[var(--main-5)]">
                <h1 className="manrope-h2 text-9xl">404</h1>
                <h2 className="manrope-h2 text-4xl">You're Here Early!</h2>
                <h4 className="manrope-thin text-xl">This page is still under construction. <br></br> Please come back shortly!</h4>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="grid">
                    <img className="row-start-1 col-start-1 ml-auto h-[30rem]" src="/home_temples_bg_mobile.svg" alt="temples bg"/>
                    <img className="row-start-1 col-start-1 h-[22rem] mt-[4rem]" src="/home_temples.svg" alt="temples"/>
                    <img className="row-start-1 col-start-1 ml-auto h-[12rem]" src="/home_temples_leaf.svg" alt="temples leaf"/>
                </div>
              </div>
            </div>
        </>
    )
}