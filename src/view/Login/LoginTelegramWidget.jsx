import TelegramButton from "../../component/ue-telegram-button/TelegramButton";

export default function TelegramAuth() {

    return (
        <>
            <TelegramButton widgetCallbackUrl={'http://localhost:5173/tgauth/callback'} widgetCornetRadius={0} botName={'UnikEAuthBot'} fullWidth title={'Войти'} onClick={() => console.log('test vtb ru')} />
        </>

    )
}