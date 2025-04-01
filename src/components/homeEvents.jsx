import SubButton from "./subButton"
import Slides from "./slides"

export default function HomeEvents() {

    const slides = [
        {title: "PERMIKA Summit 2024", date: "September 6-8, 2024", image: "/PERMIKA_Summit_2024.jpg"},
        {title: "PESTA 2024", date: "August 17, 2024", image: "/PESTA.png"},
        {title: "Warung Keliling 2025", date: "2025", image: "/warung_2025.png"}
    ]

    return (
        <div className="h-full pt-[6rem] md:pb-[12rem] mb-24">
            <div className="md:px-[12rem] px-8 flex flex-col gap-8 text-center justify-center items-center">
                <SubButton text="Events"></SubButton>
                <h2 className="manrope-h2 md:text-4xl text-2xl text-[--main-7]">Connecting Indonesian students accross Canada</h2>
                <span className="md:w-[50vw] text-center">We host fun, informative, and impactful social events, both nationally through PERMIKA Nasional and locally through our Chapters. Stay tuned for the next one!</span>
            </div>
            <Slides slides={slides}  />
        </div>
    )
}