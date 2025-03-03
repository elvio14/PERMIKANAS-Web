import SubButton from "./subButton"

export default function HomeMap() {

    return (
        <div className="grid bg-[var(--main-1)]">
            <div className="row-start-1 col-start-1 absolute right-0 h-full w-[60vw] z-10">
                MAP 3D
            </div>
            <div className="row-start-1 col-start-1 grid grid-rows-3 h-full px-[12rem] pb-[8rem] pt-[2rem] z-20">
                <div className="flex flex-col gap-4 justify-center">
                    <SubButton text="Communities"/>
                    <h2 className="manrope-h2 text-4xl text-[--main-7]">Building communities as homes<br></br>to Indonesian students abroad</h2>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="bg-[var(--background)] inline-block w-[12rem] my-[1rem] border-transparent rounded-xl rounded-tl-none shadow-xl
                    flex flex-col justify-center items-center gap-1">
                        <h2 className="manrope-h2 text-4xl text-[--main-7]">XXX</h2>
                        <h3>Indonesian Students</h3>
                    </div>
                    <div className="bg-[var(--background)] inline-block w-[12rem] my-[1rem] border-transparent rounded-xl rounded-tl-none shadow-xl
                    flex flex-col justify-center items-center gap-1">
                        <h2 className="manrope-h2 text-4xl text-[--main-7]">XX</h2>
                        <h3>PERMIKA</h3>                        
                    </div>
                    <div className="bg-[var(--background)] inline-block w-[12rem] my-[1rem] border-transparent rounded-xl rounded-tl-none shadow-xl
                    flex flex-col justify-center items-center gap-1">
                        <h2 className="manrope-h2 text-4xl text-[--main-7]">XX</h2>
                        <h3 className="text-center">Student Associations</h3>                        
                    </div>
                </div>
                <div>
                    <div className="my-[2rem] border-l-4 border-[var(--main-3)] pl-[2rem] w-[28vw]">
                        <b>Select the pins on the map to learn more. </b><br></br>
                        <span>Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}