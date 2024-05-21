// ==================================================
// File: Footer.jsx
// Authors: @gkaracsonyi, @justingetty
// Purpose: Footer element for FTCP website
// Updated: April 2024
// ==================================================

import { useNavigate } from 'react-router-dom';

import './footer.css';

import ftLogo from '/ft-logo.png';
import vimeoLogo from '../assets/logos/vimeo-logo.svg';
import youtubeLogo from '../assets/logos/youtube-icon.webp';
import facebookLogo from '../assets/logos/facebookLogo.svg';
import instagramLogo from '../assets/logos/instagramLogo.svg';

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
                        <div className='footer--connections'>
                            <div className='footer--contactButton'>
                                <button onClick={() => goTo('contact')}>CONTACT US</button>
                            </div>
                            <div className='footerSocialLinks'>
                                <a href="https://vimeo.com/user75373618" target='_blank'><img src={vimeoLogo} alt="test logo" /></a>
                                <a href="https://www.youtube.com/channel/UC88pgZsUSQwmHEhMnVzZ62A" target='_blank'><img src={youtubeLogo} alt="test logo" /></a>
                                <a href="https://www.facebook.com/fivetribesproductions/" target='_blank'><img src={facebookLogo} alt="test logo" /></a>
                                <a href="https://www.instagram.com/fivetribesproductions" target='_blank'><img src={instagramLogo} alt="test logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="littleEasterEgg" onClick={() => easterEgg()}></button>
            </footer>
        </>
    );
};

export default Footer;