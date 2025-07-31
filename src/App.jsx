import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Login from './view/Login/Login'
import Register from './view/Register/Register'
import TelegramAuth from './view/Login/LoginTelegramWidget'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tgauth" element={<TelegramAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
