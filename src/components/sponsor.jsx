import SubButton from "./subButton";

export default function Sponsor() {

    const sponsors = [
        {
            img: "/indomie.png",
            title: "Indomie",
            desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem."
        },
        {
            img: "/indomie.png",
            title: "Indomie",
            desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem."
        },
        {
            img: "/indomie.png",
            title: "Indomie",
            desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem."
        },
        {
            img: "/indomie.png",
            title: "Indomie",
            desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem."
        },
    ]

    return (
        <div className="px-4 md:px-[12rem] pt-16 pb-64 flex flex-col items-center gap-8 bg-[var(--main-1)]">
            <SubButton text="Sponsors"/>
            <h1 className="manrope-h2 text-center text-4xl text-[--main-7]">Thank you for supporting our community!</h1>
            <h3 className="text-center px-16">Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod ullamcorper habitant. Risus proin nec habitasse orci risus ridiculus morbi at.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sponsors.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl px-4 py-8 shadow-lg flex flex-col items-center text-center">
                        <img src={item.img} alt={item.title} />
                        <h3 className="manrope-h2 text-xl">{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}