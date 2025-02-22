import SubButton from "./subButton"
import Slides from "./slides"

export default function HomeEvents() {

    const slides = [
        {title: "PERMIKANAS Goes to Vancouver", date: "October 1, 2024", image: "/Image_Placeholder.png"},
        {title: "PERMIKANAS Event 2", date: "July 1, 2024", image: "/Image_Placeholder.png"},
        {title: "PERMIKANAS Event 3", date: "January 1, 2024", image: "/Image_Placeholder.png"}
    ]

    return (
        <div className="h-full py-[6rem]">
            <div className="bg-red-100 px-[12rem] flex flex-col gap-4 justify-center items-center">
                <SubButton text="Events"></SubButton>
                <h2 className="manrope-h2 text-4xl text-[--main-7]">Connecting Indonesian students accross Canada</h2>
                <span className="w-[50vw] text-center">Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</span>
            </div>
            <Slides slides={slides}  />
        </div>
    )
}