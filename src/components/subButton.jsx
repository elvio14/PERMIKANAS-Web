export default function SubButton({text = "Subtitle"}){
    return (
        <div className="rounded-full border-2 border-[var(--main-2-b)] bg-[var(--main-2)] inline-block text-center w-[9rem] px-8 py-1 text-xs md:text-sm">{text}</div>
    )
}