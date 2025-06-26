import { MainButton } from "@/components/button";
import Header from "@/components/header";
import HomeMap from "@/components/homeMap";
import HomeEvents from "@/components/homeEvents";

export default function Article() {
    return (
      <>
        <Header active="resources"></Header>
        <main class="container py-8">
        {/* Article Section */}
        <div class="flex d gap-6 py-6">
        
        <div class="mb-24">
        <header>
          <a href="/articles" class="back-button">← Back to All Articles</a>
          <h1 class="h1-article mt-5 mb-3 leading-tight">How to Start Your Application: Applying to Undergrad and Masters in Canada</h1>
          <p class="artcile-subtitle mb-5">20th June 2024 • 6 minute read</p>
        </header>
  
        <img
          class="article-image rounded w-full"
          src="/Article_Image2.jpeg"
          alt="University campus in Canada"
        />

        <p class="mt-5">Studying in Canada offers world-class education, diverse communities, and a vibrant student experience. Whether you're applying for undergraduate or master's programs, understanding the application process is key. Here's a quick guide to help you get started.</p>
  
        {/* Table of Contents */}
        <section class="article-container">
          <h2 class="article-subheader mt-8">Jump to:</h2>
          <ul class="toc-list">
            <li class="toc-item"><a href="#section1" class="link">Canadian University Application Process (General)</a></li>
            <li class="toc-item"><a href="#section2" class="link">Applying Through OUAC (Ontario Universities' Application Centre)</a></li>
            <li class="toc-item"><a href="#section3" class="link">Applying Through ApplyAlberta</a></li>
            <li class="toc-item"><a href="#section4" class="link">Applying Through EducationPlannerBC (British Columbia)</a></li>
            <li class="toc-item"><a href="#section5" class="link">Applying Through SRAM (Quebec)</a></li>
            <li class="toc-item"><a href="#section6" class="link">Other Ways to Apply</a></li>
            <li class="toc-item"><a href="#section7" class="link">Resources</a></li>
          </ul>
        </section>
  
        {/* Main Content */}
        <section class="article-container mt-5">
          <h2 class="manrope-h3 my-5" id="section1"> Canadian University Application Process (General)</h2>
          <p>In Canada, the university application process varies slightly depending on the province and the program level (undergraduate or graduate). Generally, you’ll follow these steps:</p>
          <br></br>
        <div class="flex items-center gap-8">
        <img src="/Image_Placeholder.png" class="img-placeholder"></img>
        <div class="w-2/3">
          <ol class="mt-4">
            <li>1. <strong>Research </strong>programs and universities.</li>
            <li>2. <strong>Check admission requirements</strong> (academic scores, language proficiency, etc.).</li>
            <li>3. <strong>Prepare documents</strong> such as transcripts, test scores, and reference letters.</li>
            <li>4. <strong>Apply online</strong> through a centralized platform (Breakdown below!) or directly to the university.</li>
            <li>5. <strong>Track your application</strong> and respond to offers.</li>
          </ol>
        </div>
        </div>
        </section>

        <section>
        <h2 class="manrope-h3 my-5" id="section2">Applying Through OUAC (Ontario Universities' Application Centre)</h2>
        <h3 class="manrope-h4 mb-2">What is OUAC?</h3>
          <p>OUAC <a href="https://www.ouac.on.ca"><u>(https://www.ouac.on.ca/)</u></a> is the centralized application portal for undergraduate programs at Ontario universities. If you're applying to multiple schools in Ontario, this is your go-to platform.</p> <br></br>

        <h3 class="manrope-h4 mb-2">Timeline & Deadlines</h3>
        <ol>
          <li><strong>October – January:</strong> Research programs and gather documents.</li>
          <li><strong>Mid-January: </strong>Most major application deadlines (e.g., for high school students).</li>
          <li><strong>February – May: </strong>Submit additional documents if requested.</li>
          <li><strong>May – June: </strong>Admission offers and decisions are released.</li>
          <li><strong>June onward:</strong> Accept your offer and prepare for arrival in Canada.</li>
        </ol>
        <p class="mt-3"><em>Always check the specific university deadlines on their official websites.</em></p>

        <h3 class="manrope-h4 mt-5 mb-2">Documents to Prepare</h3>
        <p>Here are the common documents you’ll need:</p>
        <ol>
          <li class="mt-3">
            <strong>•  Academic Transcripts & Certificates</strong><br></br>
            Official records from your high school or undergraduate institution. These must be translated into English or French if needed.
          </li>
          <li class="mt-3">
            <strong>•  English Proficiency Test Results</strong><br></br>
            Most universities accept IELTS Academic or TOEFL iBT. Some may also accept Duolingo English Test or other equivalents.
          </li>
          <li class="mt-3">
            <strong>•  Other Common Requirements</strong><br></br>
            Statement of Purpose or Personal Statement, Reference Letters (especially for master’s programs), Resume/CV, Passport scan
          </li>
        </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5" id="section3">Applying Through ApplyAlberta</h2>
        <h3 class="manrope-h4 mt-5 mb-2">What is ApplyAlberta?</h3>
          <p>ApplyAlberta <a href="https://www.ouac.on.ca"><u>(https://www.applyalberta.ca/)</u></a>is the centralized online application system for undergraduate and graduate programs at public universities and colleges in Alberta. If you're applying to institutions like the University of Alberta, University of Calgary, or Mount Royal University, you'll likely use this platform.</p>

        <h3 class="manrope-h4 mt-5 mb-2">Timeline & Deadlines</h3>
        <ol>
          <li><strong>October – December:</strong> Research Alberta institutions and programs.</li>
          <li><strong>January – March: </strong>Application period for most fall semester intakes.</li>
          <li><strong>April – June: </strong>Submit required documents and await admission decisions.</li>
          <li><strong>June – August: </strong>Final decisions, offer acceptance, and preparation for study permit and arrival.</li>
        </ol>
        <p class="mt-3"><em>Note: Deadlines vary by institution and program. Always confirm directly with your chosen university.</em></p>

        <h3 class="manrope-h4 mt-5 mb-2">Documents to Prepare</h3>
        <p>Here are the common documents you’ll need:</p>
        <ol>
          <li class="mt-3">
            <strong>•  Academic Transcripts & Certificates</strong><br></br>
            Submit official transcripts from your high school or previous post-secondary institutions. International transcripts may need to be evaluated or translated.
          </li>
          <li class="mt-3">
            <strong>•  Proof of English Language Proficiency</strong><br></br>
            Accepted tests include IELTS Academic, TOEFL iBT, or CAEL. Some institutions may accept Duolingo or PTE Academic.
          </li>
          <li class="mt-3">
            <strong>•  Additional Documents (varies by program):</strong><br></br>
            Personal Statement, Letters of Reference, Resume or CV, Portfolio (for design/art programs), Valid Passport
          </li>
        </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5" id="section3">Applying Through EducationPlannerBC (British Columbia)</h2>
        <h3 class="manrope-h4 mt-5 mb-2">What is EducationPlannerBC?</h3>
          <p>EducationPlannerBC<a href="https://www.google.com/url?q=https://www.educationplannerbc.ca/&sa=D&source=docs&ust=1750907847550365&usg=AOvVaw1yh2FIAUjgtS2-WM-3gUNp"><u>(https://www.applyalberta.ca/)</u></a>is the centralized application platform for undergraduate programs at most public universities and colleges in British Columbia. It allows you to explore programs, plan your application, and apply to multiple institutions in one place.</p>

        <h3 class="manrope-h4 mt-5 mb-2">Timeline & Deadlines</h3>
        <ol>
          <li><strong>October – December: </strong>Explore programs and review admission requirements.</li>
          <li><strong>December – February: </strong>Applications open for most Fall intakes.</li>
          <li><strong>February – March: </strong>Submit required documents and complete additional tasks (like portfolios or assessments).</li>
          <li><strong>April – June: </strong>Offers of admission released.</li>
          <li><strong>June – August: </strong>Accept offers, apply for study permits (if needed), and prepare for enrollment.</li>
        </ol>
        <p class="mt-3"><em>Exact deadlines vary by institution and program — always check each university’s official site.</em></p>

        <h3 class="manrope-h4 mt-5 mb-2">Documents to Prepare</h3>
        <p>Here are the common documents you’ll need:</p>
        <ol>
          <li class="mt-3">
            <strong>•  Academic Transcripts</strong><br></br>
            High school or post-secondary transcripts (official and translated, if needed).
          </li>
          <li class="mt-3">
            <strong>•  Proof of English Language Proficiency</strong><br></br>
            Accepted tests: IELTS Academic, TOEFL iBT, PTE Academic, or Duolingo English Test (varies by school).
          </li>
          <li class="mt-3">
            <strong>•  Additional Documents (varies by program):</strong><br></br>
            Resume/CV, Personal statement or essay, Letters of reference (mostly for selective or graduate programs), Portfolio (for art/design programs), Valid Passport (for international applicants)
          </li>
        </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5" id="section4">Applying Through SRAM (Quebec)</h2>
        <h3 class="manrope-h4 mt-5 mb-2">What is SRAM?</h3>
          <p>SRAM (Service régional d'admission du Montréal métropolitain) is a centralized application platform used by many CEGEPs and technical colleges in Quebec. It simplifies applying to multiple French-language public colleges in the region.</p> <br></br>
          <p><em>Note: If you are applying to universities in Quebec (like McGill, Concordia, or Université de Montréal), you must apply directly through each school’s website.</em></p>

        <h3 class="manrope-h4 mt-5 mb-2">Timeline & Deadlines</h3>
        <p class="mt-5"><strong>Fall Admission:</strong></p>
        <ol>
          <li><strong>January: </strong>Application Open</li>
          <li><strong>February - March: </strong>Application Deadline</li>
        </ol>
        <p class="mt-5"><strong>Winter Admission:</strong></p>
        <ol>
          <li><strong>August: </strong>Application Open</li>
          <li><strong>October - November: </strong>Application Deadline</li>
        </ol>
        <p class="mt-3"><em> Exact dates are published each cycle on SRAM’s site.</em></p>

        <h3 class="manrope-h4 mt-5 mb-2">Documents to Prepare</h3>
        <p>Here are the common documents you’ll need:</p>
        <ol>
          <li class="mt-3">
            <strong>•  High School Transcripts</strong><br></br>
            Must be translated into French or English if originally in another language.
          </li>
          <li class="mt-3">
            <strong>•  Language Proficiency Proof</strong><br></br>
            Some colleges may require a French language proficiency test.
          </li>
        </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5" id="section5">Other Ways to Apply</h2>
          <p>Besides OUAC, here are other ways to apply to Canadian universities:</p>
          <ol>
            <li class="mt-3"><strong>•  Apply directly through the university website</strong>
            <br></br>common for schools outside Ontario or for graduate programs.</li>
            <li class="mt-4"><strong>• Education agents or consultants</strong>
            <br></br> useful for international students needing additional support.</li>
          </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5" id="section6">Useful Resources</h2>
          <p>Besides OUAC, here are other ways to apply to Canadian universities:</p>
          <ol>
            <li>OUAC Undergraduate Guide</li>
            <li>Universities Canada – Study in Canada</li>
            <li>EduCanada – Official Government Site for International Students</li>
            <li>Scholarships Canada</li>
          </ol>
        </section>

        <section>
        <h2 class="manrope-h3 mt-7 mb-5">Conclusion</h2>
          <p>Starting your application to a Canadian university might seem overwhelming, but with the right preparation and resources, it becomes manageable. Begin early, stay organized, and make sure to double-check each university’s unique requirements. Good luck!</p>
        </section>
        </div>
        
        {/* Sticky Section */}
        <div class="container pt-12 sticky top-[60px] z-10">
        <div class="community-container">
            <h2 class="community-header">Join our community to keep up to date on our latest resources</h2>
            <p class="community-text mt-2 mb-3">Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem.</p>
            <button className="rounded-full bg-[#CD5A48] px-[1.5rem] hover:bg-[#803124] transition duration-300 py-1 text-white text-[14px]">Join Now</button>
        </div>

        <div class="flex items-center mt-8 mb-4"> 
          <span class="divider-text w-full">Other Articles</span>
        <div class="border-b border-red-800 w-full max-w-md"></div>
        </div>
        
        <div class="flex items-center">
          <img src="/Article_Image3.jpeg" alt="Article1 Thumbnail" class="other-article-image"></img>
          <div class="w-2/3">
          <h3><a href="#" class="text-black font-bold hover:text-[#CD5A48]">Documents to Bring</a></h3>
              <p class="text-secondary text-sm">Lorem ipsum odor amet, consectetuer adip elit.</p>
          </div>
        </div>
        
        <div class="flex items-center pt-5">
          <img src="/Article_Image4.jpeg" alt="Article1 Thumbnail" class="other-article-image"></img>
          <div class="w-2/3">
          <h3><a href="#" class="text-black font-bold hover:text-[#CD5A48]">Lapor Diri to KJRI</a></h3>
              <p class="text-secondary text-sm">Lorem ipsum odor amet, consectetuer adip elit. </p>
          </div>
        </div>
        </div>
        </div>
      </main>
      </>
    );
  };