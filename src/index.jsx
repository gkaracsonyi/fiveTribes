import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home.jsx'
import Commercials from './views/Commercials.jsx'
import Livestreaming from './views/Livestreaming.jsx'
import Events from './views/Events.jsx'
import Education from './views/Education.jsx'
import Athletics from './views/Athletics.jsx'
import Nonprofit from './views/Nonprofit.jsx'
import Films from './views/Films.jsx'
import About from './views/About.jsx'
import SJL from './views/SJL.jsx'
import Contact from './views/Contact.jsx'

import './index.css'

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
                <Route path='contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);