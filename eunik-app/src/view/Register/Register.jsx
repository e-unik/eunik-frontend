import { useEffect, useState } from "react";
import Box from "../../component/ue-box/Box";
import Button from "../../component/ue-button/Button";
import Frame from "../../component/ue-frame/Frame";
import { TelegramIcon } from "../../component/ue-icon/Icon";
import Input from "../../component/ue-input/Input";
import { useNavigate } from "react-router";

const loginInputRegex = /^[a-zA-Z0-9_]{0,16}$/;
const birthdateInputRegex = /^(\d{1,2})(\.(\d{1,2})?)?(\.(\d{1,4})?)?$/
const passwordInputRegex = /^[^\s]{0,64}$/;

const clampDate = (dd, mm, yyyy) => {
    let day = parseInt(dd, 10);
    let month = parseInt(mm, 10);
    let year = parseInt(yyyy, 10);

    // Ограничения
    if (month < 1) month = 1;
    if (month > 12) month = 12;
    if (day < 1) day = 1;

    const maxDays = new Date(year, month, 0).getDate(); // 0 = последний день предыдущего месяца
    if (day > maxDays) day = maxDays;

    return {
        dd: String(day).padStart(2, '0'),
        mm: String(month).padStart(2, '0'),
        yyyy: String(year),
    };
};

export default function Register() {

    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const onChangeLogin = (e) => {
        if (!loginInputRegex.test(e.target.value)) {
            return;
        }
        setLogin(e.target.value);
    }

    const [name, setName] = useState('');
    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const [date, setDate] = useState('');
    const handleDateChange = (e) => {
        const input = e.target;
        const rawValue = input.value;
        const cursorPos = input.selectionStart;

        const digits = rawValue.replace(/\D/g, "").slice(0, 8);

        let dd = digits.slice(0, 2);
        let mm = digits.slice(2, 4);
        let yyyy = digits.slice(4, 8);

        if (digits.length === 8) {
            ({ dd, mm, yyyy } = clampDate(dd, mm, yyyy));
        }

        let formatted = "";
        if (digits.length > 0) formatted += dd;
        if (digits.length > 2) formatted += "." + mm;
        if (digits.length > 4) formatted += "." + yyyy;

        // Коррекция позиции курсора
        const prevDotsBefore = (date.slice(0, cursorPos).match(/\./g) || []).length;
        const newDotsBefore = (formatted.slice(0, cursorPos).match(/\./g) || []).length;
        const diff = newDotsBefore - prevDotsBefore;
        const newCursor = cursorPos + diff;

        setDate(formatted);

        requestAnimationFrame(() => {
            input.setSelectionRange(newCursor, newCursor);
        });

        // 5. Восстанавливаем позицию курсора после рендера
        requestAnimationFrame(() => {
            input.setSelectionRange(newCursor, newCursor);
        });
    };


    const [password, setPassword] = useState('');
    const onChangePassword = (e) => {
        if (!passwordInputRegex.test(e.target.value)) {
            return;
        }
        setPassword(e.target.value);
    }

    const [confPassword, setConfPassword] = useState('');
    const onChangeConfPassword = (e) => {
        setConfPassword(e.target.value);
    }

    return (
        <Frame title='Регистрация'>
            <Box direction='column'>
                <Input onChange={onChangeLogin} value={login} fullWidth label={'логин'} requered />
                <Input onChange={onChangeName} value={name} fullWidth label={'имя'} requered />
                <Input onChange={handleDateChange} value={date} fullWidth label={'дата рождения'} requered />
                <Box direction='row'>
                    <Input onChange={onChangePassword} value={password} fullWidth label={'пароль'} requered type="password" />
                    <Input onChange={onChangeConfPassword} value={confPassword} fullWidth label={'повтор пороля'} requered type="password" />
                </Box>
            </Box>
            <Box fullWidth direction='column'>
                <Button title={'Зарегестрироваться'} onClick={() => console.log('test vtb ru')} />
                <Button title={'Уже есть аккаунт? Войти'} onClick={() => navigate('/login')} />
            </Box>
        </Frame>
    )
}