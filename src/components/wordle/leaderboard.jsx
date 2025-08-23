import { getAllSubmissions, getAllUserData } from "@/app/actions"
import { useEffect, useState } from "react"
import Card from "./card"
import SubButton from "../subButton"

export default function Leaderboard() { 
    const [data, setData] = useState(null)
    const [userData, setUserData] = useState(null)
    const [userDataFetched, setUserDataFetched] = useState(false)
    const [userDataSorted, setUserDataSorted] = useState(false)
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
                // Sort immediately after fetching
                const sorted = Array.isArray(fetched)
                    ? [...fetched].sort((a, b) => Number(b.totalScore) - Number(a.totalScore))
                    : [];
                setUserData(sorted);
                setUserDataSorted(true);
                console.log("Sorted user data.", sorted);
            });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getSubmissions();
        getUserData();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center gap-2 py-8">
            <SubButton text="Wordle"/>
            <h2 className="manrope-h2 text-4xl mt-8">Leaderboard</h2>
            <p>See who’s on top of their game with their Indo lingo!</p>
            <div
                className="mt-8 py-4 justify-center items-center w-[60vw] max-h-[50vh] overflow-y-auto"
            >
                <div className="pt-0 px-2 flex flex-col gap-4 ">
                {
                    userData && userDataSorted && userData.map((el, index) => (
                        <Card data={el} key={index} index={index+1}/>
                    ))
                }
                </div>
                { !userDataSorted && <p>Loading leaderboard...</p>}
            </div>
        </div>
    )
}