import "./frame.css"

export default function Frame({
    title,
    minWidth,
    maxWidth,
    fullWidth = false,
    style,
    children,
}) {
    return (
        <div
            className="ueframe"
            style={{ ...style, minWidth: minWidth ? "" : "max-content", maxWidth: maxWidth, width: fullWidth ? "100%" : "fit-content" }}
        >
            <div
                className="ueframe-content"
                style={{ ...style, minWidth, maxWidth, width: fullWidth ? "100%" : "fit-content" }}
            >
                <span id="ueframe-title">
                    {title}
                </span>
                {children}

            </div>
        </div>
    )
}

