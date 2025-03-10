import { MainButton } from "@/components/button";
import Header from "@/components/header";
import HomeMap from "@/components/homeMap";
import HomeEvents from "@/components/homeEvents";

export default function Home() {



  return (
    <>
    <Header active="home"></Header>
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Home */}
      <div className="w-[100vw] grid grid-cols-[1fr_1fr] items-center my-[5rem]">
        <div className="pl-[12rem]">
          <img className="ml-[-1.1rem]" src="/home_title.png" alt="title permika nasional" />
          <div>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</p>
          </div>
          <button className="text-[var(--main-5)] mt-4 px-8 py-3 rounded-full border-solid border-2 border-[var(--main-5)] hover:bg-[#CD5A48] hover:text-white hover:border-white transition duration-300 ">Join Our Community</button>
        </div>
        <div className="grid">
          <img className="row-start-1 col-start-1 ml-auto mt-[4.2rem]" src="/home_temples_bg.svg" alt="temples bg"/>
          <img className="row-start-1 col-start-1" src="/home_temples.svg" alt="temples"/>
          <img className="row-start-1 col-start-1 ml-auto" src="/home_temples_leaf.svg" alt="temples leaf"/>
        </div>
      </div>
    </div>
    <HomeMap />
    <HomeEvents />
    </>
  )
}
