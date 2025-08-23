import { getAllSubmissions, getAllUserData } from "@/app/actions"
import { useEffect, useState } from "react"
import Card from "./card"
import SubButton from "../subButton"

export default function Leaderboard() { 
    const [data, setData] = useState(null)
    const [userData, setUserData] = useState(null)
    const [userDataFetched, setUserDataFetched] = useState(false)
    const getSubmissions = async () => {
        try{
            await getAllSubmissions().then((fetched) => setData(fetched))
        }catch(err){    
            console.error(err)
        }
    }

    const getUserData = async () => {
        try {
            await getAllUserData().then((fetched) => {
                setUserData(fetched)
                console.log(fetched)
            }).then(()=>setUserDataFetched(true))
        }catch(err){
            console.error(err)
        }
    }

    const sortUserData = () => {
        if (Array.isArray(userData)) {
            const sorted = [...userData].sort((a, b) => b.totalScore - a.totalScore)
            setUserData(sorted)
        }
    }
    useEffect(()=> {
        getSubmissions()
        getUserData()
    }, [])
    useEffect(() => {
        sortUserData()
    }, [userDataFetched])

    return (
        <div className="flex flex-col items-center justify-center gap-2 py-8">
            {/* {data && data.map((element, idx) => (
                <p key={idx}>{element.username}</p>
            ))} */}
            <SubButton text="Wordle"/>
            <h2 className="manrope-h2 text-4xl mt-8">Leaderboard</h2>
            <p>See who’s on top of their game with their Indo lingo!</p>
            <div className="mt-8 flex flex-col gap-4 justify-center items-center w-[60vw]">
            {
                userData && userData.map((el, index) => (
                    <Card data={el} key={index} index={index+1}/>
                ))
            }
            </div>
        </div>
    )
}