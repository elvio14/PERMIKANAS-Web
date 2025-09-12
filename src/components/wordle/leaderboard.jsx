import { getAllSubmissions, getAllUserData } from "@/app/actions"
import { useEffect, useState } from "react"
import Card from "./card"
import CardMobile from "./cardMobile"
import SubButton from "../subButton"
import { useRouter } from "next/navigation"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"

export default function Leaderboard() { 
    const [data, setData] = useState(null)
    const [userData, setUserData] = useState(null)
    const [userDataSorted, setUserDataSorted] = useState(false)
    
    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path)
    }

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

    let mobile = useIsMobile()
    if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
    }
    return (
        <div className="flex flex-col items-center justify-center text-center gap-2 md:py-8 py-32 md:mx-2 px-2">
            <SubButton text="Wordle"/>
            <a onClick={()=> goToPage("/play")}><h2>{"< back to game"}</h2></a>
            <h2 className="manrope-h2 text-4xl mt-8">Leaderboard</h2>
            <p>See who’s on top of their game with their Indo lingo!</p>
            <div
                className="mt-8 py-4 justify-center items-center md:w-[60vw] max-h-[50vh] w-[90vw] overflow-y-auto"
            >
                <div className="pt-0 px-2 flex flex-col gap-4 justify-center items-center">
                {
                    userData && userDataSorted && userData.map((el, index) => (
                        mobile ?
                        <CardMobile data={el} key={index} index={index+1}/> : 
                        <Card data={el} key={index} index={index+1}/>
                    ))
                }
                { !userDataSorted && <p>Loading leaderboard...</p>}
                </div>
            </div>
        </div>
    )
}