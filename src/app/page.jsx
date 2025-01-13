import { MainButton } from "@/components/button";
import Image from "next/image";

export default function Home() {



  return (
    <div className="flex flex-col items-center">
      {/* Home */}
      <div className="w-[80vw] grid grid-cols-[1fr_1fr] items-center border-4 my-32">
        <div className="px-4">
          <div className="text-4xl my-4">Welcome to PERMIKA Nasional</div>
          <div className="text-xl mb-16">Tagline or catchphrase</div>
          <MainButton className="my-4" text="Join our Community"></MainButton>
        </div>
        <div className="flex justify-center">
          <div style={{width: '30vw', height: '30vw' , background: 'lightcoral'}}>{/* ILLUSTRATION */}
          <p>ILLUSTRATION</p>
          </div>
        </div>
      </div>
    </div>
  )
}
