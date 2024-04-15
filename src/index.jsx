import React from 'react'
import Home from './Home.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='commercials' element={<Commercials />} />
                <Route path='livestreaming' element={<Livestreaming />} />
                <Route path='events' element={<Events />} />
                <Route path='events/education' element={<Education />} />
                <Route path='events/athletics' element={<Athletics />} />
                <Route path='events/nonprofit' element={<Nonprofit />} />
                <Route path='films' element={<Films />} />
                <Route path='about' element={<About />} />
                <Route path='sjl' element={<SJL />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);