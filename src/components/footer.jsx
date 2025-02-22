import FooterJoin from "./footerJoin";

export default function Footer() {
    return (
        <>
        <FooterJoin/>
        <div className="bg-[var(--main-7)] px-[12rem] text-[var(--main-1)] mb-auto z-0 pt-[4rem]">
            <div className="h-[18rem] gap-12 grid grid-cols-[5fr_1.2fr_1.2fr_2fr_2fr_2fr]">
                <div className="flex justify-center items-center" >
                    <img className="h-[8rem]" src="/permikanas_logo_white.svg" alt="permikanas logo" />
                </div>
                <div className="flex flex-col mt-28">
                    <p className="manrope-body-bold">About Us</p>
                    <p>Visi Misi</p>
                    <p>Our Team</p>
                </div>
                <div className="flex flex-col mt-28">
                    <p className="manrope-body-bold">Events</p>
                    <p>Internal</p>
                    <p>External</p>
                </div>
                <div className="flex flex-col mt-28">
                    <p className="manrope-body-bold">Resources</p>
                    <p>Before & Upon Arrival</p>
                    <p>Survival Tips</p>
                </div>
                <div className="flex flex-col mt-28">
                    <p className="manrope-body-bold">Communities</p>
                    <p>Permika Chapters</p>
                    <p>ISA/PPI Canada</p>
                </div>
                <div className="flex flex-col mt-28">
                    <p className="manrope-body-bold">Contact Us</p>
                    <p>permikanas@gmail.com</p>
                    <p>Soc Med Logos</p>
                </div>
            </div>
            <div className="h-[5rem] border-t border-t-[var(--main-1)] py-4">
             @ Copyright by Web Team PERMIKANAS 2024/2025 All rights reserved
            </div>
        </div>
        </>
    )
}