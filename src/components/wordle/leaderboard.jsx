import { getAllSubmissions } from "@/app/actions"
import { useEffect, useState } from "react"

export default function Leaderboard() { 
    const [data, setData] = useState([])
    const getSubmissions = async () => {
        try{
            await getAllSubmissions().then((fetched) => setData(fetched))
        }catch(err){    
            console.error(err)
        }
    }
    useEffect(()=> {
        getSubmissions()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            {data && data.map((element, idx) => (
                <p key={idx}>{element.username}</p>
            ))}
        </div>
    )
}