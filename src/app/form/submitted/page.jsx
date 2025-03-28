import Header from "@/components/header"

export default function Submitted(){

    return (
        <>
            <Header/>
            <div className="bg-gradient-to-br from-[var(--main-1)] flex flex-col items-center gap-8 pt-16 pb-[12rem]">
                <div className="rounded-xl shadow-xl bg-white md:w-[50vw] flex flex-col items-center gap-8 md:py-8 md:mb-16">
                    <h1 className="manrope-h2 md:text-2xl">Thank you for joining us!</h1>
                    <span>Your data has been submitted.</span>
                </div>
            </div>
        </>
    )
}