export default function HomeMobile() {
    return (
        <div className="flex flex-col gap-4 items-center">  
            <div className="grid mx-16 mt-32">
                <img className="row-start-1 col-start-1 ml-auto" src="/home_temples_bg_mobile.svg" alt="temples bg"/>
                <img className="row-start-1 col-start-1 mt-[4rem]" src="/home_temples.svg" alt="temples"/>
                <img className="row-start-1 col-start-1 ml-auto h-[8rem] mt-4" src="/home_temples_leaf.svg" alt="temples leaf"/>
            </div>
            <h1 className="font-a text-4xl text-[var(--main-5)]">Permika Nasional</h1>
            <div className="mx-8 text-center">Lorem ipsum odor amet, consectetuer adip iscing elit. Egestas quisque sem, sodales pulvinar aenean habitasse euismod. aenean habitasse aenean habitasse habitasse habitasse.</div>
            <button className="text-[var(--main-5)] mt-4 px-8 py-3 rounded-full border-solid border-2 border-[var(--main-5)]">Join Our Community</button>
        </div>
    )
}