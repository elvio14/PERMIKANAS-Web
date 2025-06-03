import events from "../data/events.json"
import {useRef, useEffect,useState} from "react"

export default function EventsBanner(){
    const scrollRef = useRef(null)
    const [atEnd, setAtEnd] = useState(false)

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        const checkScrollEnd = () => {
          const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
          setAtEnd(isAtEnd);
        };
    
        // Check initially and on scroll
        checkScrollEnd();
        el.addEventListener("scroll", checkScrollEnd);
        return () => el.removeEventListener("scroll", checkScrollEnd);
    }, []);
    return (
        <div className="bg-red-400 grid grid-cols-[1fr_1.6fr] py-32">
            <div>
            </div>
            <div 
                ref={scrollRef} 
                className="overflow-x-scroll flex relative [mask-image:linear-gradient(to_right,black,black_80%,transparent)]"
                style={{
                    maskImage: atEnd
                      ? "none"
                      : "linear-gradient(to right, black, black 80%, transparent)",
                    WebkitMaskImage: atEnd
                      ? "none"
                      : "linear-gradient(to right, black, black 80%, transparent)",
                  }}>

                <div className="whitespace-nowrap">
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
                                {ev.title}
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}