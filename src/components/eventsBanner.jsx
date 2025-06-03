import events from "../data/events.json"
import {useRef, useEffect,useState} from "react"

export default function EventsBanner(){
    const scrollRef = useRef(null)
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        const checkScroll = () => {
          const snapThres = 200;
          const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
          setAtEnd(isAtEnd);
          const isAtStart = el.scrollLeft <= 1;
          setAtStart(isAtStart);
        };

    
        // Check initially and on scroll
        checkScroll()
        el.addEventListener("scroll", checkScroll);
        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    const hanldeArrow = (val) => {
        const el = scrollRef.current;
        if (el) {
          el.scrollTo({
            left: el.scrollLeft + val,
            behavior: "smooth"
          });
        }
    }
    return (
        <div className="grid grid-cols-[1fr_1.6fr] py-32 px-8 relative bg-gradient-to-t from-[var(--main-1)]">
            <div className="relative">
                {!atStart && <img 
                    src="/arrow-right.png" 
                    alt="arrow left" 
                    className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-180 cursor-pointer z-50"
                    onClick={() => hanldeArrow(-340)}
                />}
            </div>
            <div 
                ref={scrollRef} 
                className="overflow-x-scroll relative flex scrollbar-hide"
                style={{
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none", // For IE and Edge
                    maskImage: !atStart && !atEnd 
                        ? "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" :
                        !atStart ? "linear-gradient(to right, transparent, black 10%, black)" :
                        !atEnd ? "linear-gradient(to right, black, black 90%, transparent)" : "none",
                    WebkitMaskImage: !atStart && !atEnd 
                    ? "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" :
                    !atStart ? "linear-gradient(to right, transparent, black 10%, black)" :
                    !atEnd ? "linear-gradient(to right, black, black 90%, transparent)" : "none",
                    
                  }}>
                <div className="whitespace-nowrap scrollbar-hide">
                {
                    events.map((ev, index) => {
                        return (
                            <div 
                                key={index}
                                className="aspect-square w-[20vw] mx-4 rounded-xl inline-block items-center justify-center bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${ev.image})`,
                                    objectFit: "cover"
                                }}
                            >
                                <div className="h-full w-full flex flex-col justify-end p-4 bg-gradient-to-b from-black/0 to-black/30 rounded-2xl">
                                  <h3 className="text-white text-xs truncate">{ev.date}</h3>
                                  <div className=" overflow-hidden">
                                      <h2 className="manrope-body text-white text-lg truncate">{ev.title}</h2>
                                  </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {!atEnd && <img 
                    src="/arrow-right.png" 
                    alt="arrow right" 
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => hanldeArrow(340)}
            />}

        </div>
    )
}