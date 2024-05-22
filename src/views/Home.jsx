// ==================================================
// File: Home.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Home page for FTCP website
// Updated: May 2024
// ==================================================

import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import Header from '../elements/Header';
import Footer from '../elements/Footer';

import './home.css';

// IMPORTS FOR LOCAL MEDIA ASSETS
import downArrow from '../assets/expand-down.svg'; // Down arrow at the bottom of the home page hero
import pennLogo from '../assets/logos/uPennLogoBlack.png'; // UPenn Logo - Client Carousel
import aramarkLogo from '../assets/logos/aramarkLogoBlack.png'; // Aramark Logo - Client Carousel
import drexelLogo from '../assets/logos/drexelLogoBlack.png'; // Drexel University Logo - Client Carousel
import espnLogo from '../assets/logos/espnLogoBlack.png'; // ESPN Logo - Client Carousel
import hfhLogo from '../assets/logos/habitatForHumanityLogoBlack.png'; // Habitat for Humanity Logo - Client Carousel
import jeffersonLogo from '../assets/logos/jeffersonLogoBlack.png'; // Jefferson Health Logo - Client Carousel
import nbcSportsLogo from '../assets/logos/nbcSportsLogoBlack.png'; // NBC Sports Logo - Client Carousel
import usRowingLogo from '../assets/logos/usRowingLogoBlack.png'; // US Rowing Logo - Client Carousel
import amazonLogo from '../assets/logos/amazon-logo.svg';// Amazon Logo - Client Carousel
import netflixLogo from '../assets/logos/netflix-logo.svg'; // Netflix Logo - Profressional Grade

// VARIABLE TEXT AND REMOTE MEDIA
// Meta tags (for SEO and bots)
const pageDescription = "Five Tribes is an award winning cinema prodcution team in greater Philadelphia."

// Page hero
const bannerVideo = 'https://cdn.geekay.one/five-tribes-cinema-productions/sizzle-reel-chopped.mov'; // Home page hero background video (NO LARGER THAN 100MB!!!)

// Section 1 (Award Winning)
const awardWinning_description = "The Five Tribes production team is an independent video production company based in the Greater Philadelphia and South Jersey area. We produce a variety of work, ranging from commercials to our own narrative film projects. Let us make something beautiful for you."

const Home = () => {

    const navigate = useNavigate();

    const goTo = (dest) => {
        navigate(`/${dest}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Five Tribes Cinema Productions</title>
                <meta name='description' content={pageDescription} />
            </Helmet>
            <Header />
            <div className='home--heroContainer'>
                <video src={bannerVideo} autoPlay loop muted preload='true'></video>
                <div className='home--svg-container'>
                    <img src={downArrow} className='home--expand-down-img' alt='scroll down arrow' />
                </div>
                <span className='home--heroGradient'></span>
            </div>
            {/*
            <div className='bannerOne'>
                <img src='src/assets/2019 + misc/womanDeadliftingOne.png'></img>
                <h1>COMMERCIAL ADVERTISING</h1>
                <h3>PRODUCTIONS</h3>
            </div>

            <div className='bannerTwo'>
                <img src='src/assets/2019 + misc/IMG_2761-1-scaled.jpg'></img>
                <h1>PROMOTIONAL</h1>
                <h3>Video Shoots</h3>
            </div>

            <div className='bannerThree'>
                <img src='src/assets/2019 + misc/Kerwin-Haze.png'></img>
                <h1>AWARD WINNING</h1>
                <h3>Narrative Films</h3>
            </div>
            */}
            <div className='section'>
                <div className='awardWinning'>
                    <h3>AWARD WINNING</h3>
                    <h1>CINEMA PRODUCTION</h1>
                    <p>{awardWinning_description}</p>
                    <button className='home--sectionText--contactButton' onClick={() => goTo('contact')}>CONTACT</button>
                </div>
                <div className='home--sectionMedia'>
                    <img src="" alt="no source file selected" />
                    <span className='home--sectionMedia--gradient'></span>
                </div>
            </div>
            <div className="home--marqueeContainer">
                <span className='home--marqueeGradient home--mgLeft'></span>
                <div className="home--marquee">
                    {/* Section 1 */}
                    <img className="home--marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="home--marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="home--marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="home--marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="home--marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="home--marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="home--marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="home--marqueeLogo" src={usRowingLogo} alt="us rowing logo" />
                    <img className="home--marqueeLogo" src={amazonLogo} alt="amazon logo" />

                    {/* Section 2 - Duplicate content for infinite scrolling */}
                    <img className="home--marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="home--marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="home--marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="home--marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="home--marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="home--marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="home--marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="home--marqueeLogo" src={usRowingLogo} alt="us rowing logo" />
                    <img className="home--marqueeLogo" src={amazonLogo} alt="amazon logo" />

                    {/* To add a client logo to the carousel, import the logo as shown above, and add
                    the new logo TWICE (one per section). Make sure that the logo you are importing is
                    white with a transparent background. This can be achieved using a png and increasing
                    the brighness of the image until everything is white. */}
                </div>
                <span className='marqueeGradient mgRight'></span>
            </div>
            <Footer />
        </>
    );
};

export default Home;
