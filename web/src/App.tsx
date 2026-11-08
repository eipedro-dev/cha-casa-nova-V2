
import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/public/Home.tsx'
import { Gifts } from './pages/public/Gifts'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/gifts" element={<Gifts/>} />
            <Route path="/admin" element={<h1>Painel administrativo</h1>} />
        </Routes>
    )
}
