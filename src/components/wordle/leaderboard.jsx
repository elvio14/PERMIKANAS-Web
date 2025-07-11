import { getAllSubmission } from "@/app/actions"
import { useEffect, useState } from "react"

export default function Leaderboard() { 
    const [data, setData] = useState()
    useEffect(async ()=> {
        try{
            await getAllSubmission().then((fetched) => setData(fetched))
        }catch(err){    
            console.error(err)
        }
    }, [])
    return (
        <>
            {data && data.map((element, idx) => (
                <p key={idx}>{element}</p>
            ))}
        </>
    )
}