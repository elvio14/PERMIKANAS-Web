export const MainButton = ({text = "Button"}) => {

    return (
        <button
        className="px-4 py-2"
        style={{
            backgroundColor: "var(--main-c)", 
            borderRadius: "0.5rem",
            color: "var(--main)"
        }}>{text}</button>
    )
}

export const SecondaryButton = ({text = "Button"}) => {
    return (
        <button 
        className="px-4 py-2"
        style={{
            background: "transparent", 
            border: "transparent",
            color: "var(--main-c)",
            width: "auto"
        }}>{text}</button>
    )
}
