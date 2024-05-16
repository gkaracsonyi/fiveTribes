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

    return (
        <>
            <footer>
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
                    <div className="littleEasterEgg">

                        <button onClick={console.log("This site was made by Justin Getty and George Karasconyi")}></button>
                    </div>

                    <div className='contactUs'>

                        <p>Conttact us via our contact page *PUT CONTACT BUTTON HEREEEEEEE or reach out to us!
                            Shoot Us An Email: info@fivetribescinemaproductions.com
                            Or Give Us A Call: (267) 888-7206 GEORGE PLS FIX!</p>
                        <h1>MAKE THESE BUTTONS THE SOCIAL LINKS YOU BAHRAINIAN SLUTTTTT</h1>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;