import { useEffect } from 'react';
import Cookies from "js-cookie";
import './telegramButton.css'

function getTelegramUserData() {
    const tg_user_cookie = Cookies.get('tgud');
    if (tg_user_cookie !== undefined) {
        return JSON.parse(decodeURIComponent(tg_user_cookie));
    }
    return false;
}

function runTelegramScript(botName, widgetLang, widgetSize, widgetRadius, dataRequestAccess, dataAuthUrl) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?2';
    script.async = true;
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-lang', widgetLang);
    script.setAttribute('data-size', widgetSize);
    script.setAttribute('data-radius', widgetRadius);
    script.setAttribute('data-request-access', dataRequestAccess);
    script.setAttribute('data-auth-url', dataAuthUrl);

    document.getElementById('uebutton-content').appendChild(script);
}

export default function TelegramButton({
    botName,
    widgetSize = 'large',
    widgetCornetRadius = 0,
    widgetLang = 'ru',
    dataRequestAccess = 'write',
    dataCallbackUrl,
    style = {},
    fullWidth = false,
    onClick = () => { }
}) {
    useEffect(() => {
        const tg_user = getTelegramUserData();
        if (tg_user !== false) {
            console.log(tg_user);
            const first_name = tg_user['first_name'];
            const last_name = tg_user['last_name'];
            const username = tg_user['username'];

            if (username !== undefined) {
                console.log(`Hello ${username} (${first_name} ${last_name})`);
            } else {
                console.log(`Hello ${first_name} ${last_name}`);
            }

            const photo_url = tg_user['photo_url'];
            if (photo_url !== undefined) {
                console.log(photo_url);
            }
        } else {
            runTelegramScript(botName, widgetLang, widgetSize, widgetCornetRadius, dataRequestAccess, dataCallbackUrl);
        }

    }, []);

    return (
        <button
            className="uetgbutton"
            style={{ ...style, flex: fullWidth ? '1 1 auto' : '0 0'  }}
            onClick={onClick}
        >
            <div id="uebutton-content" className="uebutton-content"></div>
            
        </button>
    )
}

