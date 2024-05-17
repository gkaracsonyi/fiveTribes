// ==================================================
// File: Footer.jsx
// Authors: @gkaracsonyi, @justingetty
// Purpose: Footer element for FTCP website
// Updated: April 2024
// ==================================================

import { useNavigate } from 'react-router-dom';

import './footer.css';

import ftLogo from '/ft-logo.png';

const Footer = () => {

    const navigate = useNavigate();

    const goTo = (dest) => {
        navigate(`/${dest}`);
    };

    const easterEgg = () => {
        console.log("This site was made by Justin Getty and George Karasconyi");
    };

    return (
        <>
            <footer>
                <div className='footerMainContainer'>
                    <div className='footerLogoContainer'>
                        <img src={ftLogo} alt="ftcp logo" />
                    </div>
                    <div className='footerLinks'>
                        <div className='footerPageLinks'>
                            <h3>Page Links</h3>
                            <ul>
                                <li><button onClick={() => goTo('about')}>About Us</button></li>
                                <li><button onClick={() => goTo('films')}>Films</button></li>
                                <li><button onClick={() => goTo('events')}>Events</button></li>
                                <li><button onClick={() => goTo('commercials')}>Commercials</button></li>
                                <li><button onClick={() => goTo('livestreaming')}>Livestreaming</button></li>
                                <li><button onClick={() => goTo('sjl')}>SJL Racing</button></li>
                            </ul>
                        </div>
                        <div className='footerSocialLinks'>
                            <button><img src={ftLogo} alt="test logo" /></button>
                            <button><img src={ftLogo} alt="test logo" /></button>
                            <button><img src={ftLogo} alt="test logo" /></button>
                            <button><img src={ftLogo} alt="test logo" /></button>
                        </div>
                    </div>
                </div>
                <button className="littleEasterEgg" onClick={() => easterEgg()}></button>
            </footer>
        </>
    );
};

export default Footer;