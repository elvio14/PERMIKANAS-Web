export default function FooterJoin() {
    return (
        <div className="flex flex-col items-center mb-[-5rem] px-[12rem]">   
            <div className="w-full h-[16rem] bg-[var(--main-3)] z-10 rounded-3xl grid grid-cols-[1fr_1fr]"> 
                <img className="h-[20rem] mt-[-6rem] ml-[8rem]" src="/footer_join.png" alt="illustration join our community" />
                <div className="px-[4rem] py-[2rem]">
                    <h2 className="manrope-h2 text-2xl text-[--main-1]">Join our community to keep up to date on our latest activities</h2>
                    <br />
                    <h3 className="text-[--main-1]">Fill in a short form to introduce yourself </h3>
                    <br />
                    <div className="bg-white bg-opacity-25 mr-[9.8rem] h-[2rem] rounded-full flex">
                        <img src="/mail.svg" alt="mail icon" className="px-[1rem]"/>
                        <input type="text" className="text-[var(--main-1)] bg-transparent"></input>
                        <button className="rounded-full bg-white px-[1.5rem] hover-red transition duration-300">Join</button>
                    </div>

                </div>

            </div>
        </div>
    )
}