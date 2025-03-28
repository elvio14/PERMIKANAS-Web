import SubButton from "./subButton"
import Slides from "./slides"

export default function HomeEvents() {

    const slides = [
        {title: "PERMIKANAS Goes to Vancouver", date: "October 1, 2024", image: "/Image_Placeholder.png"},
        {title: "PERMIKANAS Event 2", date: "July 1, 2024", image: "/Image_Placeholder.png"},
        {title: "PERMIKANAS Event 3", date: "January 1, 2024", image: "/Image_Placeholder.png"}
    ]

    return (
        <div className="h-full pt-[6rem] md:pb-[12rem]">
            <div className="md:px-[12rem] px-8 flex flex-col gap-8 text-center justify-center items-center">
                <SubButton text="Events"></SubButton>
                <h2 className="manrope-h2 md:text-4xl text-2xl text-[--main-7]">Connecting Indonesian students accross Canada</h2>
                <span className="md:w-[50vw] text-center">Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</span>
            </div>
            <Slides slides={slides}  />
        </div>
    )
}