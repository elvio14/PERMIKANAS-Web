export default function Slides({slides = [{title: "Default Title", image: "/Image_Placeholder.png"}]}) {
    return (
        <div className="flex space-x-4 justify-center py-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="h-72 w-64 bg-cover bg-center rounded-2xl transition-all duration-300 hover:w-[32rem] cursor-pointer"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full flex flex-col justify-end p-4 bg-black/40 rounded-2xl">
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