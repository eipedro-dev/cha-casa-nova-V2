
import { Routes, Route } from 'react-router-dom'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Página pública</h1>} />
            <Route path="/admin" element={<h1>Painel administrativo</h1>} />
        </Routes>
    )
}
