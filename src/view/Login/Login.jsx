import { useState } from "react";
import Box from "../../component/ue-box/Box";
import Button from "../../component/ue-button/Button";
import Frame from "../../component/ue-frame/Frame";
import { TelegramIcon } from "../../component/ue-icon/Icon";
import Input from "../../component/ue-input/Input";
import { useNavigate, useRoutes } from "react-router";
import TelegramButton from "../../component/ue-telegram-button/TelegramButton";
import Divider from "../../component/ue-divider/Divider";
import { HOST } from "../../const/const";

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
    <Frame fullWidth maxWidth={'30em'} title='Вход'>
      <Box fullWidth direction='column'>
        <Input fullWidth onChange={onChangeLogin} value={login} label='логин' />
        <Input fullWidth onChange={onChangePassword} value={password} label='пароль' type="password" />
      </Box>
      <Box fullWidth direction='column'>
        <Button fullWidth title={'Войти'} onClick={() => console.log('test vtb ru')} />
        <Button fullWidth title={'Сбросить пароль'} onClick={() => navigate('/help/recover')} />
        <Divider value={'или'} />
        <Button fullWidth title={'Регистрация'} onClick={() => navigate('/register')} />
        <TelegramButton
          dataCallbackUrl={`${HOST}/login/callback`}
          botName={'UnikEAuthBot'}
          title={'Войти'}
        />
      </Box>
    </Frame>
  )
}