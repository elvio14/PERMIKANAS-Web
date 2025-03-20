import CommHomeComponent from "./commHomeComponent"

export default function HomeMap() {

    return (
        <div className="grid bg-[var(--main-1)]">
            <div className="row-start-1 col-start-1 absolute right-0 h-full w-[60vw] z-10">
                MAP 3D
            </div>
            <CommHomeComponent/>
        </div>
    )
}