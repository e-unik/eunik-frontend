import Cookies from "js-cookie";
import { useEffect } from "react";

function getTelegramUserData() {
    const tg_user_cookie = Cookies.get('tgud');
    if (tg_user_cookie !== undefined) {
        return JSON.parse(decodeURIComponent(tg_user_cookie));
    }
    return false;
}

function runTelegramScript(bot_name) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?2';
    script.async = true;
    script.setAttribute('data-telegram-login', bot_name);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '0');
    script.setAttribute('data-auth-url', 'http://localhost:5173/tgauth/callback');

    document.getElementById('telegram-button').appendChild(script);
}

export default function TelegramAuth() {

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
            const bot_name = 'UnikEAuthBot';
            runTelegramScript(bot_name);
        }

    }, []);

    return (
        <>
            <div id="telegram-button"></div>
        </>

    )
}