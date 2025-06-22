import { TelegramIcon } from '../ue-icon/Icon'
import './button.css'

export default function Button({
    title,
    icon,
    style = {},
    fullWidth = false,
    onClick = () => { }
}) {
    return (
        <button
            className="uebutton"
            style={{ ...style, flex: fullWidth ? '1 1 auto' : '0 0'  }}
            onClick={onClick}
        >
            <span className="uebutton-content">
                {title}
                {icon}
            </span>
            
        </button>
    )
}

