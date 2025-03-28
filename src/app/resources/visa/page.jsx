import { MainButton } from "@/components/button";
import Header from "@/components/header";
import HomeMap from "@/components/homeMap";
import HomeEvents from "@/components/homeEvents";

export default function Article() {
    return (
      <div className="article-container">
        {/* Header Section */}
      <>
        <Header active="resources"></Header>
        <main class="container py-8">
        {/* Article Section */}
        <div className="flex gap-6 py-6">
          <div className="w-3/4 mb-24">
        <header>
          <a href="/articles" class="back-button">← Back to All Articles</a>
          <h1 class="h1-article mt-5 mb-3 leading-tight">How to Start Your Application: <br></br> Applying For Canadian Study Permit</h1>
          <p class="artcile-subtitle mb-5">22nd July 2024 • 6 minute read</p>
        </header>
  
        {/* Header Image */}
        <img
          src="/Article_Image2.jpeg"
          alt="University campus in Canada"
          class="rounded w-full"
        />
  
        {/* Table of Contents */}

        <section class="article-container">
          <h2 class="article-subheader mt-8">Table of Contents</h2>
          <ul class="toc-list">
            <li class="toc-item"><a href="#section1" class="link">Timeline & Deadlines</a></li>
            <li class="toc-item"><a href="#section2" class="link">Section 1</a></li>
            <li class="toc-item"><a href="#section3" class="link">Section 2</a></li>
          </ul>
          <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
  
        {/* Main Content */}
        <article>
        <section class="article-container mt-5">
        <div class="flex items-center gap-8">
        <img src="/Image_Placeholder.png" class="img-placeholder"></img>
        <div class="w-2/3">
        <h2 class="article-subheader" id="section1">Timeline & Deadlines</h2>
          <ul class="mt-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
          </ul>
        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
        </div>
        </section>

        <section>
        <h2 class="article-subheader mt-5" id="section2">Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section>
        <h2 class="article-subheader mt-5" id="section3">Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br></br>
        </section>
        </article>
        </div>
  
        {/* Sticky Section */}
        <aside className="w-1/4"> {/* Changed to w-1/4 */}
                <div className="sticky top-[60px] z-10">
                  <div className="community-container">
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
        </aside>
      </div>
      </main>
      </>
      </div>
    );
  };