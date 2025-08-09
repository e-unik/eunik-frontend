import { useEffect, useRef } from 'react';
import './telegramButton.css'
import { getTelegramUserData, runTelegramScript } from '../../view/Login/api/tgScript';

export default function TelegramButton({
    botName,
    widgetSize = 'large',
    widgetCornetRadius = 0,
    widgetLang = 'ru',
    dataRequestAccess = 'write',
    dataCallbackUrl,
    style = {},
    fullWidth = false
}) {
    const telegramButtonRef = useRef(null);

    useEffect(() => {
        const tg_user = getTelegramUserData(); // todo remove this add check myself auth cookie 
        if (tg_user !== false) {
            return;
        }
        runTelegramScript(
            'uetgwidget',
            botName,
            widgetLang,
            widgetSize,
            widgetCornetRadius,
            dataRequestAccess,
            dataCallbackUrl
        );
    }, []);

    return (
        <button
            className="uetgbutton"
            style={{ ...style, width: fullWidth ? '100%' : '' }}
        >
            <div id="uetgwidget" ref={telegramButtonRef} className="uetgbutton-content" onClick={() => onTelegramButtonClick}></div>
        </button>
    )
}

