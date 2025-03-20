import CommHomeComponent from "./commHomeComponent";

export default function HomeMapMobile(){
    return (
        <div className="h-[50vh] bg-[var(--main-1)] relative z-0">
            <img src="/bg_map.svg" alt="map bg" className="absolute top-8 right-10 scale-[180%] z-10"/>
            <div className="relative z-20">
                <CommHomeComponent/>
            </div>
        </div>
    )
}