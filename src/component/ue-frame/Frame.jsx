import "./frame.css"

export default function Frame({
    title,
    width,
    fullWidth = false,
    style,
    children,
}) {
    return (
        <div
            className="ueframe"
            style={{ ...style, width: fullWidth ? "100%" : "fit-content" }}
        >
            <div
                className="ueframe-content"
                style={{ ...style, width }}
            >
                <span id="ueframe-title">
                    {title}
                </span>
                {children}

            </div>
        </div>
    )
}

