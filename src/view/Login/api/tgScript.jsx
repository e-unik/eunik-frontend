import Cookies from "js-cookie";

export function getTelegramUserData() {
    const tg_user_cookie = Cookies.get('stel_token');
    console.log(tg_user_cookie);

    if (tg_user_cookie !== undefined) {
        return JSON.parse(decodeURIComponent(tg_user_cookie));
    }
    return false;
}

export function getCallbackParameters() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    params.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}

export function runTelegramScript(id, botName, widgetLang, widgetSize, widgetRadius, dataRequestAccess, dataCallbackUrl) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?2';
    script.async = true;
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-lang', widgetLang);
    script.setAttribute('data-size', widgetSize);
    script.setAttribute('data-radius', widgetRadius);
    script.setAttribute('data-request-access', dataRequestAccess);
    script.setAttribute('data-auth-url', dataCallbackUrl);

    const content = document.getElementById(id);

    if (content) {
        content.appendChild(script);
    }
}