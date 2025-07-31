import "./box.css"

export default function Box({
    style,
    direction = "row",
    width,
    minWidth = "30em",
    fullWidth = false,
    children,
}) {
    return (
        <div
            id="uebox"
            style={{ ...style, flex: fullWidth ? 'auto' : '' }}
        >
            <div
                id="uebox-content"
                style={{ ...style, minWidth, width, flexDirection: direction, flex: fullWidth ? 'auto' : '' }}
            >
                {children}

            </div>
        </div>
    )
}

