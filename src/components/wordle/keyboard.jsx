import { useEffect, useState } from "react"
import { ResultType } from "./resultTypes"

export default function Keyboard({request, onKeyClicked}){
    const [keys, setKeys] = useState([
        { key: 'Q', status: ResultType.BLANK },
        { key: 'W', status: ResultType.BLANK },
        { key: 'E', status: ResultType.BLANK },
        { key: 'R', status: ResultType.BLANK },
        { key: 'T', status: ResultType.BLANK },
        { key: 'Y', status: ResultType.BLANK },
        { key: 'U', status: ResultType.BLANK },
        { key: 'I', status: ResultType.BLANK },
        { key: 'O', status: ResultType.BLANK },
        { key: 'P', status: ResultType.BLANK },
        { key: 'A', status: ResultType.BLANK },
        { key: 'S', status: ResultType.BLANK },
        { key: 'D', status: ResultType.BLANK },
        { key: 'F', status: ResultType.BLANK },
        { key: 'G', status: ResultType.BLANK },
        { key: 'H', status: ResultType.BLANK },
        { key: 'J', status: ResultType.BLANK },
        { key: 'K', status: ResultType.BLANK },
        { key: 'L', status: ResultType.BLANK },
        { key: 'Z', status: ResultType.BLANK },
        { key: 'X', status: ResultType.BLANK },
        { key: 'C', status: ResultType.BLANK },
        { key: 'V', status: ResultType.BLANK },
        { key: 'B', status: ResultType.BLANK },
        { key: 'N', status: ResultType.BLANK },
        { key: 'M', status: ResultType.BLANK }
    ])

    const updateKeyStatus = (targetKey, newStatus) => {
        setKeys(prev =>
            prev.map(item =>
                item.key.toLocaleLowerCase() === targetKey ? {...item, status: Math.max(newStatus, item.status)} : item
            )
        )
        console.log("updateKeyStatus")
    }

    const handleClick = (key) => {
        console.log("clicked " + key)
        onKeyClicked(key)
    }

    useEffect(()=>{
        if(request){
            request.forEach(key => {
                updateKeyStatus(key.targetKey, key.newStatus)
            });
        }
    }, [request])

    return (
        <div className="flex flex-col py-8 items-center gap-2">
            <div className="flex gap-2">
                {keys.slice(0, 10).map((key, index) => (
                    <div
                        key={key.key}
                        className={`
                            aspect-[2/3] h-12 md:w-10 flex items-center justify-center rounded
                            text-lg font-bold cursor-pointer select-none
                            border border-2 border-transparent hover:border-red-800
                            ${key.status === ResultType.CORRECT ? "bg-[darkseagreen]" : ""}
                            ${key.status === ResultType.PRESENT ? "bg-[sandybrown]" : ""}
                            ${key.status === ResultType.ABSENT ? "bg-[dimgray]" : ""}
                            ${key.status === ResultType.BLANK ? "bg-[lightgrey]" : ""}
                        `}
                        onClick={()=>handleClick(key.key)}
                    >
                        {key.key}
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                {keys.slice(10, 19).map((key, index) => (
                    <div
                        key={key.key}
                        className={`
                            aspect-[2/3] h-12 md:w-10  flex items-center justify-center rounded
                            text-lg font-bold cursor-pointer select-none
                            border border-2 border-transparent hover:border-red-800
                            ${key.status === ResultType.CORRECT ? "bg-[darkseagreen]" : ""}
                            ${key.status === ResultType.PRESENT ? "bg-[sandybrown]" : ""}
                            ${key.status === ResultType.ABSENT ? "bg-[dimgray]" : ""}
                            ${key.status === ResultType.BLANK ? "bg-[lightgrey]" : ""}
                        `}
                        onClick={()=>handleClick(key.key)}
                    >
                        {key.key}
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <div className={`w-fit px-2 h-12 flex items-center justify-center rounded text-lg font-bold cursor-pointer select-none bg-[lightgrey]
                                border border-2 border-transparent hover:border-red-800`}
                onClick={()=>handleClick('DEL')}>
                    Del
                </div>
                {keys.slice(19).map((key, index) => (
                    <div
                        key={key.key}
                        className={`
                            aspect-[2/3] h-12 md:w-10 flex items-center justify-center rounded
                            text-lg font-bold cursor-pointer select-none
                            border border-2 border-transparent hover:border-red-800
                            ${key.status === ResultType.CORRECT ? "bg-[darkseagreen]" : ""}
                            ${key.status === ResultType.PRESENT ? "bg-[sandybrown]" : ""}
                            ${key.status === ResultType.ABSENT ? "bg-[dimgray]" : ""}
                            ${key.status === ResultType.BLANK ? "bg-[lightgrey]" : ""}
                        `}
                        onClick={()=>handleClick(key.key)}
                    >
                        {key.key}
                    </div>
                ))}
                <div className={`w-fit px-2 h-12 flex items-center justify-center rounded text-lg font-bold cursor-pointer select-none bg-[lightgrey]
                                border border-2 border-transparent hover:border-red-800`}
                onClick={()=>handleClick('ENTER')}>
                    Ent
                </div>
            </div>
        </div>
    )
}