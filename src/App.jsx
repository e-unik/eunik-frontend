import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './view/Login/Login'
import Register from './view/Register/Register'
import TgCallback from './view/Login/TgCallback'
import Error from './view/Error/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Error title='Идёт стройка' titleSize='4em' comment='Приходите позже' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/callback" element={<TgCallback />} />
        <Route path="/*" element={<Error title='404' comment='Страница не найдена' buttonTitle='Вернуться на главную' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
