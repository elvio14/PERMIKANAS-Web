"use client"
import Header from "@/components/header"
import useIsMobile from "@/components/isMobile"
import Loading from "@/components/loading"
import HeaderMobile from "@/components/headerMobile"
import { useRouter } from "next/navigation"

export default function ArticleLapor() {
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
          <div className="flex gap-6 py-6">
            {/* Article Section */}
            <div className="md:w-3/4 w-full mb-24 overflow-x-hidden">
              <header>
                {/* <a href="/articles" className="back-button transition duration-300">← Back to All Articles</a> */}
                <h1 className="h1-article mt-5 mb-3 leading-tight">Arriving In Canada: Registering as an Indonesian living in Canada</h1>
                <p className="artcile-subtitle mb-5">28th March 2025 • 3 minute read</p>
              </header>
  
              {/* Header Image */}
              <img
                src="/article_lapor.webp"
                alt="University campus in Canada"
                className="rounded w-full"
              />

              {/* Main Content */}
              <article className="mb-24">
                <section className="article-container">
                  <h2 className="article-subheader mt-8">Kewajiban Lapor Diri</h2>
                  <p className="mt-5">Sesuai dengan Undang-undang no.23 tahun 2006 tentang Administrasi Kependudukan, setiap Warga Negara Indonesia (WNI) yang berada di luar negeri <strong>wajib melaporkan keberadaan, kepindahan, perubahan alamat, status izin tinggal, serta kejadian penting lainnya</strong> (seperti kelahiran, perkawinan, perceraian, maupun kematian) kepada pemerintah setempat dan/atau Perwakilan RI yang meliputi tempat tinggalnya (Ps. 4 UU no.23/2006).</p> <br></br>
                  <p>Untuk itu setiap Warga Negara Indonesia (WNI) yang berada di luar negeri sangat diharapkan untuk melaporkan keberadaan dirinya kepada Perwakilan RI setempat apabila akan tinggal lebih dari 5 (lima) hari di negara yang dikunjungi.</p> <br></br>
                  <p>Lapor diri pada Perwakilan RI setempat sangat besar manfaatnya. Tentunya sangat diharapkan agar setiap WNI yang berada di luar negeri menjaga dirinya masing-masing dan senantiasa dijauhi dari kesulitan dan berbagai hambatan. Namun, apabila terjadi hal yang tidak diharapkan pada diri seorang WNI, maka tentunya akan jauh lebih mudah bagi Perwakilan RI (dalam hal ini Bagian Konsuler) untuk membantunya jika WNI tersebut sudah mendaftarkan/melaporkan data dirinya di Perwakilan RI. Proses dan prosedur untuk lapor diri sangat mudah, cepat dan tidak dipungut bayaran apapun.</p> <br></br>
                  <p>Pendaftaran / Lapor Diri wajib bagi Warga Negara Indonesia (WNI) yang berada di wilayah kerja KJRI Vancouver (Provinsi British Columbia, Provinsi Alberta, Northwest Territories dan Yukon Territory), KJRI Toronto (Provinsi Manitoba, Provinsi Ontario, Provinsi Saskatchewan, dan Provinsi Nunavut)</p>

                  <p className="my-3"> <strong>Untuk melakukan Pendaftaran / Lapor Diri silahkan klik link: <a href="https://peduliwni.kemlu.go.id/beranda.html" className="underline text-blue-500">Pendaftaran / Lapor Diri WNI Online</a></strong></p>

                  <h2 className="article-subheader mt-8">Vancouver</h2>
                  <iframe className="rounded md:w-[560px] md:h-[315px] w-[95vw] h-[25vh]" src="https://www.youtube.com/embed/UuKxh-hsD68?si=bwjJ8PQyHygjqWeC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  <h2 className="article-subheader mt-8">Toronto</h2>
                  <ul>
                    <li className="mb-1">Prosedur</li>
                    <li>• Mengisi formulir lapor diri online <a href="https://peduliwni.kemlu.go.id/beranda.html" className="underline text-blue-500">Pendaftaran / Lapor Diri WNI Online</a> dan meng-upload file: foto diri, salinan paspor, ​​dan salinan ijin tinggal (Permanent Resident Card, Working Permit, Study Permit, Visa).</li>
                    <li>• Atau bisa secara langsung dengan datang ke Loket Konsuler KJRI Toronto (129 Jarvis Street, Toronto, ON M5C 2H6) atau mengirimkan file-file tersebut dan data diri ke email: consular@indonesiatoronto.org</li>
                    <li>• Proses lapor diri tidak dikenai biaya.</li>
                    <li>• Data yang Anda isikan akan dipergunakan untuk pengurusan dokumen ​keimigrasian, seperti perpanjangan paspor, legalisasi.</li>
                  </ul>

                  <h2 className="article-subheader mt-8">Ottawa</h2>
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <img src="/Ottawa_Lapor_Diri1.jpg" alt="Poster Prosedur 1" className="w-full h-auto rounded-lg"></img>
                    </div>
                    <div>
                      <img src="/Ottawa_Lapor_Diri2.jpg" alt="Poster Prosedur 2" className="w-full h-auto rounded-lg"></img>
                    </div>
                    <div>
                      <img src="/Ottawa_Lapor_Diri3.jpg" alt="Poster Prosedur 3" className="w-full h-auto rounded-lg"></img>
                    </div>
                    <div>
                      <img src="/Ottawa_Lapor_Diri4.jpg" alt="Poster Prosedur 4" className="w-full h-auto rounded-lg"></img>
                    </div>
                  </div>
                </section>
              </article>
            </div>
  
            {/* Sticky Section */!mobile && 
            <aside className="w-1/4"> {/* Changed to w-1/4 */}
              <div className="sticky top-[60px] z-10 pb-32">
                <div className="community-container">
                  <h2 className="community-header">Join our community!</h2>
                  <p className="community-text mt-2 mb-3">Fill our short form and keep up to date on our latest resources.</p>
                  <button className="rounded-full bg-[#CD5A48] px-[1.5rem] hover:bg-[#803124] transition duration-300 py-1 text-white text-[14px]">Join Now</button>
                </div>
            
                <div className="flex items-center mt-8 mb-4"> 
                  <span className="divider-text w-full">Other Articles</span>
                <div className="border-b border-red-800 w-full max-w-md"></div>
                </div>
            
                <div className="flex items-center">
                  <img src="/article_docs.webp" alt="Article1 Thumbnail" className="other-article-image"></img>
                  <div className="w-2/3">
                  <h3><p onClick={() => goToPage("/resources/docs")} className="text-black font-bold hover:text-[#CD5A48] transition duration-300 cursor-pointer">Documents to Bring</p></h3>
                      <p className="text-secondary text-sm">Checklist for Documents to bring from Indonesia</p>
                  </div>
                </div>
            
                {/* <div className="flex items-center pt-5">
                  <img src="/Article_Image2.jpeg" alt="Article1 Thumbnail" className="other-article-image"></img>
                  <div className="w-2/3">
                  <h3><a href="src/app/resources/lapor/page.jsx" className="text-black font-bold hover:text-[#CD5A48] transition duration-300">Applying for Visa</a></h3>
                      <p className="text-secondary text-sm">All you need to know on Student & Work Visa</p>
                  </div>
                </div> */}
              </div>
            </aside>}
          </div>
        </main>
      </div>
    </>
    )
  }