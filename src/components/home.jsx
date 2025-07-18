import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path) 
    }
    
    return (
        <div className="flex flex-col items-center overflow-x-hidden z-0">
        <div className="w-[100vw] grid grid-cols-[1fr_1fr] items-center my-[5rem]">
          <div className="pl-[12rem]">
            <img className="ml-[-1.1rem]" src="/home_title.png" alt="title permika nasional" />
            <div>
              <h2 className="manrope-h2 text-xl my-2 text-[var(--main-5)]">Unite, Ignite, and Reach New Heights</h2>
              <p>PERMIKA Nasional is more than a network—it’s a home away from home for Indonesian students across Canada.</p>
            </div>
            <button onClick={() => goToPage("/form")} className="text-[var(--main-5)] mt-4 px-8 py-3 rounded-full border-solid border-2 border-[var(--main-5)] hover:bg-[var(--main-5)] hover:text-white transition duration-300">Join Our Community</button>
          </div>
          <div className="grid">
            <img className="row-start-1 col-start-1 ml-auto mt-[4.2rem]" src="/home_temples_bg.svg" alt="temples bg"/>
            <img className="row-start-1 col-start-1" src="/home_temples.svg" alt="temples"/>
            <img className="row-start-1 col-start-1 ml-auto" src="/home_temples_leaf.svg" alt="temples leaf"/>
          </div>
        </div>
      </div>
    )
}