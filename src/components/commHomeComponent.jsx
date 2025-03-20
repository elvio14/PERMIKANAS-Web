import SubButton from "./subButton"

export default function CommHomeComponent() {
    return (
        <div className="grid grid-rows-3 h-[45vh] md:h-full z-20
                        px-4 py-8
                        md:px-[12rem] md:pb-[8rem] md:pt-[2rem] 
                        ">
            <div className="flex flex-col gap-4 justify-center">
                <SubButton text="Communities"/>
                <h2 className="manrope-h2 text-xl md:text-4xl text-[--main-7]">Building communities as homes<br></br>to Indonesian students abroad</h2>
            </div>
            <div className="flex flex-row mx-auto md:mx-0 gap-4 md:gap-8 h-[4rem] md:h-[10rem] text-[var(--main-5)]">
                <div className="bg-[var(--background)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">XXX</h2>
                    <h3 className="text-[10px] md:text-base">Indonesian Students</h3>
                </div>
                <div className="bg-[var(--background)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">XX</h2>
                    <h3 className="text-[10px] md:text-base">PERMIKA</h3>                        
                </div>
                <div className="bg-[var(--background)] inline-block border-transparent rounded-xl rounded-tl-none shadow-xl
                flex flex-col justify-center items-center gap-1
                w-[28vw] my-1 py-[2.5rem] px-2
                md:w-[12rem] md:my-[1rem]">
                    <h2 className="manrope-h2 text-xl md:text-4xl">XX</h2>
                    <h3 className="text-[10px] md:text-base">Student Associations</h3>                        
                </div>
            </div>
            <div>
                <div className="my-2 md:my-[2rem] border-l-4 border-[var(--main-3)] pl-8 w-[85vw] md:w-[28vw]">
                    <b className="hidden md:block">Select the pins on the map to learn more.<br></br> </b>
                    <span>Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</span>
                </div>
            </div>
        </div>
    )
}