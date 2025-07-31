import { MainButton } from "@/components/button";
import { worldeLogin, wordleSignup } from "@/app/actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const userInput = useRef(null)
    const passInput = useRef(null)

    const [status, setStatus] = useState("")
    const router = useRouter()
    const handleLogin = async () => {
        setStatus("Logging in...")
        try{
            const res = await worldeLogin(userInput.current.value, passInput.current.value)
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
        setStatus("Signing up")
        try{
            const res = await wordleSignup(userInput.current.value, passInput.current.value)
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
            <br></br>
            <MainButton text="Login" handleClick={handleLogin} /> 
            <MainButton text="Signup" handleClick={handleSignup}/>
            <br></br>
            <p>{status}</p>
        </div>
    )
}