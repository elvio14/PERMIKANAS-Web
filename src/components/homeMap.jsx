import CommHomeComponent from "./commHomeComponent"
import Spline from '@splinetool/react-spline';

export default function HomeMap() {

    return (
        <div className="relative bg-[var(--main-1)]">
            
            <div className="absolute right-0 h-full w-[60vw] right-[-7rem] z-10">
                {/* MAP 3D */}
                <Spline 
                    scene="https://prod.spline.design/Xao3S9XZmSLC0tqy/scene.splinecode" 
                />
            </div>
            <div className="relative z-20 pointer-events-none">
                <CommHomeComponent/>
            </div>
        </div>
    )
}