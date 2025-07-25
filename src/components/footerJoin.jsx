import { useRouter } from "next/navigation"

export default function FooterJoin() {
    const router = useRouter()
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }
    return (
        <div className="absolute translate-y-[-8rem] flex flex-col items-center px-[12rem]">   
            <div className="w-full h-[16rem] bg-[var(--main-3)] z-10 rounded-3xl grid grid-cols-[1fr_1fr]"> 
                <img className="h-[20rem] mt-[-6rem] ml-[8rem]" src="/footer_join.png" alt="illustration join our community" />
                <div className="px-[4rem] py-8 flex flex-col gap-4">
                    <h2 className="manrope-h2 text-2xl text-[--main-1]">Register to our community of Indonesian Students!</h2>
                    <h3 className="text-[--main-1] text-sm">By registering, you'll help us keep track of indonesian students in Canada so that we can improve our services.</h3>
                    {/* <div className="bg-white bg-opacity-25 mr-[9.8rem] h-[2rem] rounded-full flex">
                        <img src="/mail.svg" alt="mail icon" className="px-[1rem]"/>
                        <input type="text" className="text-[var(--main-1)] bg-transparent"></input>
                        <button className="rounded-full bg-white px-[1.5rem] hover-red">Join</button>
                    </div> */}
                    <div onClick={() => goToPage("/form")} className="inline-flex w-fit items-center py-[0.2rem] pl-4 pr-1 bg-[var(--main-7)] 
                    hover:bg-transparent border border-transparent hover:border-white transition duration-300 text-white rounded-full cursor-pointer">Fill in our short form
                        <div className="bg-white ml-4 px-4 py-2 scale-[80%] rounded-full text-[var(--main-3)] text-xl font-bold">{'>'}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}