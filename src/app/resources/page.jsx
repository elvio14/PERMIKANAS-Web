"use client"
import Header from "@/components/header"
import NotFound from "../not-found"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import SubButton from "@/components/subButton"
import Link from 'next/link'


export default function Resources() {
      let mobile = useIsMobile()
      if (mobile === undefined){
        return (<div className="pb-[12rem]"><Loading/></div>)
      } 

    return (
        <>
        {mobile ? 
          <>
            <HeaderMobile active="resources"></HeaderMobile>
            <div className="pt-[6rem] mx-[2rem] flex flex-col gap-5 mb-20">
              <div className="text-center">
                <div className="rounded-full border-2 border-[var(--main-2-b)] bg-[var(--main-2)] inline-flex justify-center px-8 py-1 text-xs mt-4">Blogs & Articles</div>
              </div>
              <div className="text-center">
                <h1 className="manrope-h2 text-[#803124] text-4xl">Before & Upon Arrival</h1>
              </div>

              {/* Featured */}
              <div className="flex items-center gap-4 mt-[40px]">
                <h2 className="manrope-h2 text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">Featured</h2>
                <div className="h-[1px] bg-black w-full"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-[2/1.3]">
                  <img src="/Article_Image1.png" alt="Article Image" className="w-full h-full object-cover rounded-[12px]"/>
                </div>
                <div>
                  <h1 className="font-['Inter'] font-medium text-2xl text-[#803124]">How to Start Your Application: Applying to Undergrad and Masters in Canada</h1>
                  <p className="manrope-body text-[#4B5563] mt-4">The all-in-one guide to applying to universities in Canadian provinces, this guide breaks down each system’s timelines, required documents, and application links.</p>
                  <p className="manrope-body mt-4">11th June 2025 • 7 minute read</p>
                </div>
              </div>

              {/* Before Arrival */}
              <div className="flex items-center gap-4 mt-[50px]">
                <h2 className="manrope-h2 text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">BEFORE ARRIVAL</h2>
                <div className="h-[1px] bg-black w-full"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-[2/1.3]">
                  <img src="/article_docs.png" alt="Documents to Bring" className="w-full h-full object-cover rounded-[12px]"/>
                </div>
                <div>
                  <Link href="/resources/docs">
                    <h1 className="font-['Inter'] font-medium text-2xl text-[#803124]">Documents to Bring</h1>
                  </Link>
                  <p className="manrope-body text-[#4B5563] mt-4">All in one checklist for documents to bring from Indonesia.</p>
                  <p className="manrope-body mt-4">28th March 2025 • 2 minute read</p>
                </div>
              </div>

              {/* Upon Arrival */}
              <div className="flex items-center gap-4 mt-[50px]">
                <h2 className="manrope-h2 text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">UPON ARRIVAL</h2>
                <div className="h-[1px] bg-black w-full"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-[2/1.3]">
                  <img src="/article_lapor.png" alt="Lapor Diri to the Indonesian Consulate" className="w-full h-full object-cover rounded-[12px]"/>
                </div>
                <div>
                  <Link href="/resources/lapor">
                    <h1 className="font-['Inter'] font-medium text-2xl text-[#803124]">Lapor Diri to the Indonesian Consulate</h1>
                  </Link>
                  <p className="manrope-body text-[#4B5563] mt-4">Guide on registering as an Indonesian citizen living in Canada.</p>
                  <p className="manrope-body mt-4">28th March 2025 • 3 minute read</p>
                </div>
              </div>



            </div>
            
          </>
          
          //MOBILE
          : //----------------------------------------------------------------------------------------------------------------------------
          //DESKTOP
          <>
            <Header active="resources"></Header>
            <div className="pt-[6rem] md:pb-[12rem] mx-[12rem] flex flex-col gap-8">
              <div className="text-center">
                <div className="rounded-full border-2 border-[var(--main-2-b)] bg-[var(--main-2)] inline-flex justify-center px-8 py-1 text-xs md:text-sm">Blogs & Articles</div>
              </div>

              <div className="text-center">
                <h1 className="manrope-h2 md:text-6xl text-[#803124]">Before & Upon Arrival</h1>
              </div>

              <div className="manrope-thin text-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-xl px-4">
                <p>Useful resources for Indonesians in Canada, whether you're a student, new resident, or visitor.</p>
              </div>

              <div className="flex justify-center my-8">
                <div className="relative w-full max-w-full h-auto">
                  <img src="/Article_Image1.png" alt="Article Image" className="w-full h-auto rounded-[12px] object-cover" />
                  <div className="absolute ml-4 mb-2 bottom-4 left-4 text-white p-4 rounded-md max-w-[80%]">
                    <p className="manrope-thin tracking-[0.2em] md:text-xs lg:text-base mb-3">FEATURED</p>
                    <h2 className="manrope-thin md:text-xl lg:text-4xl">How to Start Your Application:</h2>
                    <h2 className="manrope-thin md:text-xl lg:text-4xl">Applying to Undergrad and Masters in Canada</h2>
                    <p className="manrope-body mt-3 md:text-xs lg:text-lg">The all-in-one guide to applying to universities in Canadian provinces, this guide breaks down each system’s timelines, required documents, and links so you can apply with confidence and ease.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:gap-24">
                {/* Before Arrival */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 md:gap-6 mt-8 mb-8">
                    <h2 className="manrope-h2 text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">BEFORE ARRIVAL</h2>
                    <div className="h-[1px] bg-black w-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-[2/1.3]">
                      <img src="/article_docs.png" alt="Documents to Bring" className="w-full h-full object-cover rounded-[12px]" />
                    </div>
                    <Link href="/resources/docs">
                      <h1 className="font-['Inter'] font-medium text-2xl mt-7 text-[#803124]">Documents to Bring</h1>
                    </Link>
                    <p className="manrope-body text-[#4B5563] mt-4">All in one checklist for documents to bring from Indonesia.</p>
                    <p className="manrope-body mt-4">28th March 2025 • 2 minute read</p>
                  </div>
                </div>
                {/* After Arrival */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 md:gap-6 mt-8 mb-8">
                    <h2 className="manrope-h2 text-2xl text-[#803124] tracking-[0.2em] whitespace-nowrap">UPON ARRIVAL</h2>
                    <div className="h-[1px] bg-black w-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-[2/1.3]">
                      <img src="/article_lapor.png" alt="Lapor Diri to the Indonesian Consulate" className="w-full h-full object-cover rounded-[12px]"/>
                    </div>
                    <Link href="/resources/lapor">
                      <h1 className="font-['Inter'] font-medium text-2xl mt-7 text-[#803124]">Lapor Diri to the Indonesian Consulate</h1>
                    </Link>
                    <p className="manrope-body text-[#4B5563] mt-4">Guide on registering as an Indonesian citizen living in Canada.</p>
                    <p className="manrope-body mt-4">28th March 2025 • 3 minute read</p>
                  </div>
                </div>
              </div>

            </div>
          </>
        }
        {/* <NotFound></NotFound> */}
        </>
    )
}