import SubButton from "./subButton";

export default function Sponsor() {


    return (
        <div className="px-4 md:px-[12rem] pt-16 pb-16 flex flex-col items-center gap-8 bg-[var(--main-1)]">
            <SubButton text="Upcoming"/>
            <h1 className="manrope-h2 text-center text-4xl text-[--main-7]">Register to our upcoming event!</h1>
            <h3 className="text-center px-16">Sign up using the form, don't miss out and secure your spot at our next event today</h3>
            
            <div className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-lg text-center">
                <a href="https://docs.google.com/forms/d/1NwWWBKCSO3AbiCrfX_Q51bio4aInk-SAu7f0jJanDV4/viewform?edit_requested=true" target="_blank"><img src="/PDO_poster.webp"></img></a>
            </div>
        </div>
    )
}