"use client"
import Header from "@/components/header"
import NotFound from "../not-found"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import SubButton from "@/components/subButton"


export default function Resources() {
      let mobile = useIsMobile()
      if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
      } 

    return (
        <>
        {mobile ? <HeaderMobile active="resources"></HeaderMobile> : <Header active="resources"></Header>}
        {/* <NotFound></NotFound> */}
        
        {/* <div className="h-full pt-[6rem] md:pb-[12rem] mb-24">
          <div className="md:px-[12rem] px-8 flex flex-col gap-8 text-center justify-center items-center">
            <div className="rounded-full border-2 border-[var(--main-2-b)] bg-[var(--main-2)] inline-flex justify-center px-8 py-1 text-xs md:text-sm">Blogs & Articles</div>
          </div>
        </div> */}

        {/* <div className="h-full text-center"> */}
        <div className="pt-[6rem] md:pb-[12rem] mx-[12rem] flex flex-col gap-8">
          <div className="text-center">
            <div className="rounded-full border-2 border-[var(--main-2-b)] bg-[var(--main-2)] inline-flex justify-center px-8 py-1 text-xs md:text-sm">Blogs & Articles</div>
          </div>

          <div className="text-center">
            <h1 className="manrope-h2 md:text-6xl text-[#803124]">Before & Upon Arrival</h1>
          </div>

          <div className="text-center px-[25rem]">
            <p>Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean habitasse.</p>
          </div>

          <div className="flex justify-center my-8">
            <img src="/Article_Image1.png" alt="Article Image" className="max-w-full h-auto rounded-lg" />
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-8">
            <h2 className="font-manrope font-bold text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">BEFORE ARRIVAL</h2>
            <div className="h-[1px] bg-black w-full"></div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image2.jpeg" alt="Article Image 2" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Applying for Study VISA</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image3.jpeg" alt="Article Image 3" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Documents to Bring</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image4.jpeg" alt="Article Image 4" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Lapor Diri to KJRI</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-12">
            <h2 className="font-manrope font-bold text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">UPON ARRIVAL</h2>
            <div className="h-[1px] bg-black w-full"></div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image5.jpg" alt="Article Image 5" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Applying for Study VISA</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image6.jpg" alt="Article Image 6" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Documents to Bring</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
            <div className="flex-1 aspect-[2/1.5]">
              <img src="/Article_Image4.jpeg" alt="Article Image 4" className="w-full h-full object-cover rounded-lg" />
              <h1 className="font-['Inter'] font-medium text-2xl mt-7">Lapor Diri to KJRI</h1>
              <p className="font-manrope font-light text-[#4B5563] mt-4">Lorem ipsum odor amet, consectetuer adip elit. Egestas quisque sem, sodales pulvinar aenean.</p>
              <p className="font-manrope mt-4">19 Jan 2025</p>
            </div>
          </div>

        </div>

        </>
    )
}