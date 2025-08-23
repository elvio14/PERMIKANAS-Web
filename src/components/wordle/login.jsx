import { MainButton } from "@/components/button";
import { wordleLogin, wordleSignup } from "@/app/actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const userInput = useRef(null)
    const passInput = useRef(null)

    const [signupClicked, setSignupClick] = useState(false)

    const [status, setStatus] = useState("")
    const router = useRouter()

    const chapters = [
        {id: 'permikato', text: 'PERMIKA Toronto'},
        {id: 'permikava', text: 'PERMIKA Vancouver'},
        {id: 'isahumber', text: 'ISA Humber'},
        {id: 'permikamon', text:'PERMIKA Montreal'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
        {id: 'permikato', text: 'PERMIKATO'},
    ]

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
            <br />
            
            {
                signupClicked ?
                <>
                    <div class="form-group">
                        <label for="basic-select">Select Chapter:</label>
                        <select id="basic-select" class="basic-select">
                            <option value="">Select chapter...</option>
                            {
                                chapters.map((chapter) => 
                                    (<option value={chapter.id}>{chapter.text}</option>)
                                )
                            }
                        </select>
                    </div>
                    <MainButton text="Signup" handleClick={handleSignup} className="w-full" />
                </>
                :
                <>
                    <MainButton text="Login" handleClick={handleLogin} className="w-full" /> 
                    <MainButton text="Signup" handleClick={() => setSignupClick(true)} className="w-full"/>
                </>
                
            }
            <br />
            <p>{status}</p>
        </div>
    )
}