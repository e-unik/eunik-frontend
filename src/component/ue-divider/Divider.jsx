import './divider.css'


export default function Divider({
    value,
    fullWidth = true,
    style = {},
}) {

    return (
        <div
            className="uedivider"
            style={{ ...style, flex: fullWidth ? '1 1 auto' : '0 0' }}
        >
            <div className="uedivider-content">
                {value}
            </div>
        </div>
    )
}

