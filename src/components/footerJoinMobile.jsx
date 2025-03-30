import { useRouter } from "next/navigation"
export default function FooterJoinMobile(){
    const router = useRouter()
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }
    
    return (
        <div className="flex flex-col items-center text-center gap-2 bg-[var(--main-5)] px-16 py-8 text-[var(--main-1)] relative">
            <h2 className="manrope-h2 text-lg px-2">Register to our community of Indonesian Students!</h2>
            <p className="text-xs">By registering, you allow us to collect your information, which helps us plan events, improve our services, and deliver information.</p>
            <div onClick={() => goToPage("/form")} className="inline-flex w-fit mt-2 items-center py-[0.2rem] pl-4 pr-1 bg-[var(--main-7)] text-white text-xs rounded-full cursor-pointer">Fill in our short form
                <div className="bg-white ml-4 px-4 py-2 scale-[80%] rounded-full text-[var(--main-3)] text-xl font-bold">{'>'}</div>
            </div>
            <img src="/ellipse.svg"></img>
            <img src="/star.svg" className="absolute top-6 left-4 h-[3rem]"></img>
            <img src="/star.svg" className="absolute bottom-12 right-7 h-[2rem]"></img>
        </div>
    )
}