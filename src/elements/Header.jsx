// ==================================================
// File: Header.jsx
// Authors: @gkaracsonyi, @justingetty
// Purpose: Header element for FTCP website
// Updated: April 2024
// ==================================================

import { useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {

    const navigate = useNavigate();

    const goTo = (dest = '') => {
        navigate(`/${dest}`);
    };

    return (
        <>
            <header>
                <p className='ftcpLogo'>5 TRIBES LOGO</p>
                <nav>
                    <div className='pageLinks'>
                        <button className='link' onClick={() => goTo('commercials')}>Commercials</button>
                        <button className='link' onClick={() => goTo('livestreaming')}>Livestreaming</button>
                        <div className='subNav'>
                            <button className='link eventsHover' onClick={() => goTo('events')}>Events</button>
                            <div className='dropdown eventsDropdown'>
                                <button className='dropdownLink' onClick={() => goTo('events/education')}>Education</button>
                                <span className='separator'></span>
                                <button className='dropdownLink' onClick={() => goTo('events/athletics')}>Athletics</button>
                                <span className='separator'></span>
                                <button className='dropdownLink' onClick={() => goTo('events/nonprofit')}>Non-Profit</button>
                            </div>
                        </div>
                        <button className='link' onClick={() => goTo('films')}>Films</button>
                        <button className='link' onClick={() => goTo('about')}>About Us</button>
                        <button className='specialLink' onClick={() => goTo('sjl')}>SJL Racing</button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;