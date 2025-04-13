
export default function Slides({slides = [{title: "Default Title", image: "/Image_Placeholder.png"}]}) {

    return (
        <div className="flex space-x-4 md:justify-center md:px-0 overflow-x-scroll px-8 py-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.image})`}}
              className="h-72 md:w-[18vw] w-[80vw] bg-cover bg-center rounded-2xl transition-all duration-300 md:hover:w-[30vw] cursor-pointer"
            >
              <div className="h-full w-full flex flex-col justify-end p-4 bg-gradient-to-b from-black/0 to-black/30 rounded-2xl">
                <h3 className="text-white text-xs truncate">{slide.date}</h3>
                <div className=" overflow-hidden">
                    <h2 className="manrope-body text-white text-lg truncate">{slide.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}