import SubButton from "./subButton";
import Carousel from "./carousel";

export default function Sponsor() {
    const images = [
        {src: "/summit1.jpg", id: "summit1"},
        {src: "/summit2.jpg", id: "summit2"},
        {src: "/summit3.png", id: "summit3"}
    ]

    return (
        <div className="px-4 md:px-[12rem] pt-16 pb-16 flex flex-col items-center gap-8 bg-[var(--main-1)]">
            <SubButton text="Upcoming"/>
            <h1 className="manrope-h2 text-center text-4xl text-[--main-7]">Register to our upcoming event!</h1>
            <h3 className="text-center px-16">Sign up using the form, don't miss out and secure your spot at our next event today</h3>
            
            <div className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-lg text-center">
                <a href="https://forms.gle/Q2CqmbhRsbxAFWB9A" target="_blank">
                    <Carousel images={images}/>
                    <p class="mt-5">Click here to sign up</p>
                </a>
            </div>
        </div>
    )
}