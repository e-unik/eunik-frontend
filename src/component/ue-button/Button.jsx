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
            style={{ ...style, width: fullWidth ? '100%' : ''  }}
            onClick={onClick}
        >
            <span className="uebutton-content">
                {title}
                {icon}
            </span>
            
        </button>
    )
}

