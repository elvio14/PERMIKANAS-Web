import Header from "@/components/header"

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="h-[90vh] grid grid-cols-[1fr_1fr] gap-4 py-8 px-[12rem]">
              <div className="flex flex-col items-center justify-center text-center gap-4 px-[5rem] text-[var(--main-5)]">
                <h1 className="manrope-h2 text-9xl">404</h1>
                <h2 className="manrope-h2 text-4xl">You're Here Early!</h2>
                <h4 className="manrope-thin text-xl">This page is still under construction. <br></br> Please come back shortly!</h4>
              </div>
              <div className="flex flex-col items-center justify-center gap=4">
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