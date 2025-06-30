import { useEffect, useState } from "react"
import useIsMobile from "./isMobile";
import Loading from "./loading";

export default function Slide({ title, date, image, isActive }) {
    title = title || "Default Title";
    date = date || "Jan 1, 2025"
    image = image || "/Image_Placeholder.png";
    isActive = isActive !== undefined ? isActive : true;

    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    return (
      <div
        style={{ 
          backgroundImage: `url(${image})`,
          width: !mobile && isActive ? '30vw' : 
                mobile && isActive ? '80vw' :
                mobile && !isActive ? '50vw': '18vw'
        }}
        className="h-72 md:w-[18vw] w-[80vw] bg-cover bg-center rounded-2xl transition-all duration-300 cursor-pointer"
      >
        <div className="h-full w-full flex flex-col justify-end p-4 bg-gradient-to-b from-black/0 to-black/30 rounded-2xl">
          <h3 className="text-white text-xs truncate">{date}</h3>
          <div className=" overflow-hidden">
              <h2 className="manrope-body text-white text-lg truncate">{title}</h2>
          </div>
        </div>
      </div>
    )
}