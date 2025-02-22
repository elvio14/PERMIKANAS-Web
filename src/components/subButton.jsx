export default function SubButton({text = "Subtitle"}){
    return (
        <div className="rounded-full bg-[var(--main-2)] inline-block max-w-max px-[1rem]">{text}</div>
    )
}