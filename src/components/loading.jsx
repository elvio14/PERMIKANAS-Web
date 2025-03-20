export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto h-screen">
            <div className="grid p-8 animate-scaleUp">
                <img className="row-start-1 col-start-1 ml-auto h-[30rem]" src="/home_temples_bg_mobile.svg" alt="temples bg"/>
                <img className="row-start-1 col-start-1 h-[22rem] mt-[4rem]" src="/home_temples.svg" alt="temples"/>
                <img className="row-start-1 col-start-1 ml-auto h-[12rem]" src="/home_temples_leaf.svg" alt="temples leaf"/>
            </div>
        </div>
    )
}