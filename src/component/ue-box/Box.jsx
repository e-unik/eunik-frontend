import "./box.css"

export default function Box({
    style,
    direction = "row",
    width,
    minWidth,
    fullWidth = false,
    fullHeight = false,
    children,
}) {
    return (
        <div
            id="uebox"
            style={{ height: fullHeight ? '100%' : '' }}
        >
            <div
                id="uebox-content"
                style={{ ...style, minWidth, flexDirection: direction, width: fullWidth ? '100%' : width }}
            >
                {children}

            </div>
        </div>
    )
}

