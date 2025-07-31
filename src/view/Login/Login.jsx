import { useState } from "react";
import Box from "../../component/ue-box/Box";
import Button from "../../component/ue-button/Button";
import Frame from "../../component/ue-frame/Frame";
import { TelegramIcon } from "../../component/ue-icon/Icon";
import Input from "../../component/ue-input/Input";
import { useNavigate, useRoutes } from "react-router";
import TelegramButton from "../../component/ue-telegram-button/TelegramButton";
import Divider from "../../component/ue-divider/Divider";

const loginInputRegex = /^[a-zA-Z0-9_]{0,16}$/; // todo only check spaces
const loginSubmitRegex = /^[a-zA-Z0-9_]{3,16}$/;

const passwordInputRegex = /^[^\s]{0,64}$/;

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const onChangeLogin = (e) => {
    if (!loginInputRegex.test(e.target.value)) {
      return;
    }
    setLogin(e.target.value);
  }

  const [password, setPassword] = useState('');
  const onChangePassword = (e) => {
    if (!passwordInputRegex.test(e.target.value)) {
      return;
    }
    setPassword(e.target.value);
  }

  return (
    <Frame title='Вход'>
      <Box direction='column'>
        <Input onChange={onChangeLogin} value={login} fullWidth label={'логин'} />
        <Input onChange={onChangePassword} value={password} fullWidth label={'пароль'} type="password" />
      </Box>
      <Box direction='column'>
        <Button fullWidth title={'Войти'} onClick={() => console.log('test vtb ru')} />
        <TelegramButton widgetCallbackUrl={'http://localhost:5173/tgauth/callback'} widgetCornetRadius={0} botName={'UnikEAuthBot'} fullWidth title={'Войти'} onClick={() => console.log('test vtb ru')} />
        <Divider value={'или'}/>
        <Button title={'Регистрация'} onClick={() => navigate('/register')} />
        <Button title={'Сбросить пароль'} onClick={() => navigate('/help/recover')} />
      </Box>
    </Frame>
  )
}