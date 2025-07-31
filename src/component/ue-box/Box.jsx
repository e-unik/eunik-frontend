import "./box.css"

export default function Box({
    style,
    direction = "row",
    width,
    minWidth,
    fullWidth = false,
    children,
}) {
    return (
        <div
            id="uebox"
            style={style}
        >
            <div
                id="uebox-content"
                style={{ ...style, minWidth, width, flexDirection: direction, width: fullWidth ? '100%' : '' }}
            >
                {children}

            </div>
        </div>
    )
}

