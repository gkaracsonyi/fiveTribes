// ==================================================
// File: Home.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Home page for FTCP website
// Updated: May 2024
// ==================================================

import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import Header from '../elements/Header';
import Footer from '../elements/Footer';

import './home.css';

// IMPORTS FOR LOCAL MEDIA ASSETS
import downArrow from '../assets/expand-down.svg'; // Down arrow at the bottom of the home page hero
import pennLogo from '../assets/uPennLogoBlack.png'; // UPenn Logo - Client Carousel
import aramarkLogo from '../assets/aramarkLogoBlack.png'; // Aramark Logo - Client Carousel
import drexelLogo from '../assets/drexelLogoBlack.png'; // Drexel University Logo - Client Carousel
import espnLogo from '../assets/espnLogoBlack.png'; // ESPN Logo - Client Carousel
import hfhLogo from '../assets/habitatForHumanityLogoBlack.png'; // Habitat for Humanity Logo - Client Carousel
import jeffersonLogo from '../assets/jeffersonLogoBlack.png'; // Jefferson Health Logo - Client Carousel
import nbcSportsLogo from '../assets/nbcSportsLogoBlack.png'; // NBC Sports Logo - Client Carousel
import usRowingLogo from '../assets/usRowingLogoBlack.png'; // US Rowing Logo - Client Carousel

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

    return (
        <>
            <Helmet>
                <title>Five Tribes Cinema Productions</title>
                <meta name='description' content={pageDescription} />
            </Helmet>
            <Header />
            <div className='heroContainer'>
                <video src={bannerVideo} autoPlay loop muted preload='true'></video>
                <div className='svg-container'>
                    <img src={downArrow} className='expand-down-img' alt='scroll down arrow' />
                </div>
                <span className='heroGradient'></span>
            </div>
            <div className='section'>
                <div className='awardWinning'>
                    <h3>AWARD WINNING</h3>
                    <h1>CINEMA PRODUCTION</h1>
                    <p>{awardWinning_description}</p>
                    <button className='awardWinning--button' onClick={() => goTo('contact')}>CONTACT</button>
                </div>
                <div className='sectionMedia'>
                        <img src="https://i2.wp.com/blog.rememberlenny.com/wp-content/uploads/2020/10/7lAmICy.jpg?fit=1886%2C1258&ssl=1" alt="cinema production using unreal engine" />
                        <span className='sectionMedia--gradient'></span>
                </div>
            </div>
            <div className="marqueeContainer">
                <span className='marqueeGradient mgLeft'></span>
                <div className="marquee">
                    {/* Section 1 */}
                    <img className="marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="marqueeLogo" src={usRowingLogo} alt="us rowing logo" />

                    {/* Section 2 - Duplicate content for infinite scrolling */}
                    <img className="marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="marqueeLogo" src={usRowingLogo} alt="us rowing logo" />

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
