import events from "../data/events.json"
import {useRef, useEffect,useState} from "react"
import EventPanel from "./eventPanel"

export default function EventsPast() {
    const scrollRef = useRef(null)
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const today = new Date()
    const pastEvents = events.filter((event)=>{
        const eventDate = new Date(event.date)
        return eventDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    })

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        const checkScroll = () => {
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
        <div className="grid grid-cols-[1fr_1.6fr] py-32 px-8 relative">
            <div className="relative">
                <div className="flex flex-col px-32 gap-4">
                    <h4 className="manrope-thin text-[var(--main-5)]">EVENTS</h4>
                    <h2 className="manrope-h2 text-4xl text-[var(--main-5)]">PERMIKANAS Past Events</h2>
                    <p className="text-sm">Our team is a cumulation of students from 8+ cities in Canada. Follow our.....</p>
                </div>
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
                    pastEvents.map((ev, index) => {
                        return (<EventPanel key={index} ev={ev} index={index} panelWidth={"17vw"} />)
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