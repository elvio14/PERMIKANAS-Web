import { MainButton } from "@/components/button";
import { wordleLogin, wordleSignup } from "@/app/actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const userInput = useRef(null)
    const passInput = useRef(null)
    const passInputConfirm = useRef(null)
    const chapterInput = useRef(null)
    const cityInput = useRef(null)

    const [signupClicked, setSignupClick] = useState(false)

    const [status, setStatus] = useState("")
    const router = useRouter()

    const chapters = [
        'PERMIKA Toronto',
        'PERMIKA Vancouver',
        'ISA Humber',
        'PERMIKA Montreal',
        'PERMIKA Okanagan',
        'PERMIKA Calgary',
        'PERMIKA Edmonton',
        'PERMIKA Winnipeg',
    ]
    const cities = [
      "Burnaby",
      "Calgary", 
      "Edmonton",
      "Fredericton",
      "Halifax",
      "Hamilton",
      "Kingston",
      "London",
      "Montreal",
      "Okanagan",
      "Ottawa",
      "Quebec City",
      "Regina",
      "Saskatoon",
      "St. John's",
      "Toronto",
      "Vancouver",
      "Victoria",
      "Waterloo",
      "Windsor",
      "Winnipeg"
    ]

    const confirmPassword = () => {
        return passInput.current.value === passInputConfirm.current.value
    }
    const handleLogin = async () => {
        setStatus("Logging in...")
        try{
            const res = await wordleLogin(userInput.current.value, passInput.current.value)
            if(res != null){
                setStatus("Login complete")
                console.log(res)
                router.push(`/play/${res.id}`)
            }else{
                setStatus("Login failed. Wrong username or password.")
                console.log("Failed login " + userInput.current.value)
            }
        }catch(err){
            setStatus("Login server error.")
            console.log(err.message)
        }
    }

    const handleSignup = async () => {
        setStatus("")
        const passGood = confirmPassword()
        if(!passGood){
            setStatus("Passwords doesn't match!")
            return
        }
        setStatus("Signing up")
        try{
            const res = await wordleSignup(userInput.current.value, passInput.current.value, chapterInput.current.value, cityInput.current.value)
            if(res != null){
                setStatus("Signup complete")
                console.log(res)
                router.push(`/play/${res.id}`)
            }else{
                setStatus("Signup failed. Username already exists!")
                console.log("Failed signup " + userInput.current.value)
            }
        }catch(err){
            setStatus("Login server error.")
            console.log(err.message)
        }
    }   

    return (
        <div className="flex flex-col gap-4 my-4">
            <label htmlFor="username">Username</label>
            <input ref={userInput} type="text" required placeholder="e.g Andy14" name="username" id="username"
                className="border border-black-600 p-2"></input>
            <label htmlFor="password">Password</label>
            <input ref={passInput} type="password" required name="password" id="password"
                className="border border-black-600 p-2"></input>
            {
            signupClicked &&
            <>
                <label htmlFor="password">Confirm Password</label>
                <input ref={passInputConfirm} type="password" required name="password" id="passwordConfirm"
                    className="border border-black-600 p-2"></input>
                <br />
            </>
            }

            
            {
                signupClicked ?
                <>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="basic-select">Select Chapter:</label>
                        <select ref={chapterInput} className="p-2">
                            <option value="">N/A</option>
                            {
                                chapters.map((chapter) => 
                                    (<option key={chapter} value={chapter}>{chapter}</option>)
                                )
                            }
                        </select>
                        <label htmlFor="basic-select">Select City:</label>
                        <select ref={cityInput} className="p-2">
                            <option value="">N/A</option>
                            {
                                cities.map((city) => 
                                    (<option key={city} value={city}>{city}</option>)
                                )
                            }
                        </select>
                    </div>
                    <MainButton key="signup2" text="Signup" handleClick={handleSignup} className="w-full" />
                    <a onClick={() => setSignupClick(false)}>{"< login"}</a>
                </>
                :
                <>
                    <MainButton text="Login" handleClick={handleLogin} className="w-full" /> 
                    <MainButton key="signup1" text="Signup" handleClick={() => setSignupClick(true)} className="w-full"/>
                </>
                
            }
            <br />
            <p>{status}</p>
        </div>
    )
}