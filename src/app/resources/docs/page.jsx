"use client"
import Header from "@/components/header"
import HeaderMobile from "@/components/headerMobile"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import { useRouter } from "next/navigation"

export default function ArticleDocs() {
    let mobile = useIsMobile()
    if (mobile === undefined){
      return (<div className="pb-[12rem]"><Loading/></div>)
    }

    const router = useRouter()
    const goToPage = (path) => {
        console.log("Running goToPage " + path)
        router.push(path)
    }

    return (
    <>
      {/* Header Section */}
      {mobile ? <HeaderMobile active="resources"></HeaderMobile> : <Header active="resources"></Header>}
      <div className="article-container">
        <main className="container py-8">
        <div className="flex gap-10 py-6">
          {/* Article Section */}
          <div className="md:w-3/4 w-full mb-24">
            <header>

              {/* <a href="/articles" class="back-button">← Back to All Articles</a> */}
              <h1 class="h1-article mt-2 mb-3 leading-tight">Documents to Prepare: <br></br> Your All in One Checklist</h1>
              <p class="artcile-subtitle mb-5">28th March 2025 • 2 minute read</p>

            </header>
    
            {/* Header Image */}
            <img
              src="/docs_img1.webp"
              alt="University campus in Canada"
              className="rounded w-full h-auto aspect-[2/1]"
            />

            {/* Main Content */}
            <article className="mb-24">
              <section className="article-container">
                <h2 className="article-subheader mt-8">Passport</h2>
                <p className="mt-5">Ensure that the passport is valid for the duration of your stay in Canada. It's a good idea to have extra passport-sized photos as well.</p>

                <h2 className="article-subheader mt-8">Study Permit</h2>
                <p className="mt-5">This is the most important document allowing you to study in Canada. Ensure you have the official document and a copy of the approval notice.</p>

                <h2 className="article-subheader mt-8">Letter of Acceptance</h2>
                <p className="mt-5">A letter from the Canadian educational institution confirming your enrollment.</p>

                <h2 className="article-subheader mt-8">Visa (if applicable)</h2>
                <p className="mt-5">Depending on your nationality, you may need a visitor visa in addition to your study permit. Indonesian students typically need a study permit, but ensure you have checked the specific visa requirements.</p>

                <h2 className="article-subheader mt-8">Transcripts and Diplomas</h2>
                <p className="mt-5">Original and translated academic transcripts, which can include certificates, report cards from highschool and such that proves you were a student.</p>

                <h2 className="article-subheader mt-8">Financial Proof</h2>
                <p className="mt-5">Documents showing that you have sufficient funds to cover your tuition, living expenses, and return travel. This can include:</p>
                <ol>
                  <li>•  Bank Statements</li>
                  <li>•  Scholarship Letters</li>
                  <li>•  Sponsorship Letters (If applicable)</li>
                </ol>
                <h2 className="article-subheader mt-8">Medical Exam Records</h2>
                <p className="mt-5">If required, a medical exam report may be necessary depending on your country of origin and the length of stay.</p>

                <h2 className="article-subheader mt-8">Language Proficiency Test Scores</h2>
                <p className="mt-5">If applicable, scores from English or French language proficiency tests like IELTS, TOEFL, or TEF (Test d’évaluation de français).</p>

                <h2 className="article-subheader mt-8">Travel Arrangements</h2>
                <p className="mt-5">Printouts of flight tickets, accommodation confirmations, and travel insurance details.</p>


              <div className="flex items-center gap-8 mt-8">
              <img src="/docs_img2.webp" className="img-placeholder w-1/3 rounded"></img>
              <div className="w-2/3">
              <h2 className="article-subheader" id="section1">Other Resources</h2>
                <ul className="mt-4">
                  <li>First and foremost, check with your respective agents on what other documents to bring. Some universities/colleges require various documents that may differ</li>
                  <li>Visit the official Government of Canada website for international students for updated information on study permits, visas, and requirements. 
                    <ul className="list-circle">
                      <li>• <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" className="underline text-blue-500">Study in Canada as an international student</a></li>
                      <li>• <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" className="underline text-blue-500">Immigration, Refugees and Citizenship Canada</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              </div>
              </section>
            </article>
          </div>
      
          {/* Sticky Section */ !mobile &&
          <aside className="w-1/4"> {/* Changed to w-1/4 */}
            <div className="sticky top-[60px] z-10 pb-32">
              <div className="community-container">
                <h2 className="community-header">Join our community!</h2>
                <p className="community-text mt-2 mb-3">Fill our short form and keep up to date on our latest resources.</p>
                <button onClick={() => goToPage("/form")} className="rounded-full bg-[#CD5A48] px-[1.5rem] hover:bg-[#803124] transition duration-300 py-1 text-white text-[14px]">Join Now</button>
              </div>

              <div className="flex items-center mt-8 mb-4"> 
                <span className="divider-text w-full">Other Articles</span>
                <div className="border-b border-red-800 w-full max-w-md"></div>
              </div>

              {/* <div className="flex items-center">
                <img src="/Article_Image2.jpeg" alt="Article1 Thumbnail" className="other-article-image"></img>
                <div className="w-2/3">
                <h3><a href="src/app/resources/visa/page.jsx" className="text-black font-bold hover:text-[#CD5A48]">Applying Visa</a></h3>
                    <p className="text-secondary text-sm">All you need to know on Student & Work Visa</p>
                </div>
              </div> */}

              <div className="flex items-center pt-5">
                <img src="/lapor_img1.webp" alt="Article1 Thumbnail" className="other-article-image"></img>
                <div className="w-2/3">
                  <h3><p onClick={() => goToPage("/resources/lapor")} className="text-black font-bold hover:text-[#CD5A48] cursor-pointer">Lapor Diri to the Indonesian Consulate</p></h3>
                  <p className="text-secondary text-sm">Registering as an Indonesian Citizen living in Canada</p>
                </div>
              </div>
            </div>
          </aside>}
        </div>
      </main>
      </div>
    </>
    );
  };