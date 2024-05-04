// ==================================================
// File: Home.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Home page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';

import Header from '../elements/Header';

import './home.css';

import downArrow from '../assets/expand-down.svg';
import pennLogo from '../assets/uPennLogoBlack.png';
import aramarkLogo from '../assets/aramarkLogoBlack.png';
import drexelLogo from '../assets/drexelLogoBlack.png';
import espnLogo from '../assets/espnLogoBlack.png';
import hfhLogo from '../assets/habitatForHumanityLogoBlack.png';
import jeffersonLogo from '../assets/jeffersonLogoBlack.png';
import nbcSportsLogo from '../assets/nbcSportsLogoBlack.png';
import usRowingLogo from '../assets/usRowingLogoBlack.png';

import bannerVideo from '../assets/sizzle-reel-chopped.mov';

const Home = () => {



    return (
        <>
            <Helmet>
                <title>Five Tribes Cinema Productions</title>
                <meta name='description' content='Award winning cinema prodcution team in greater Philadelphia.' />
            </Helmet>
            <Header />
            <div className='heroContainer'>
                {/* <video src='https://geekay.one/media-assets/site-banner.mov' autoPlay loop muted preload='true'></video> */}
                <video src={bannerVideo} autoPlay loop muted preload='true'></video>
                <div className='svg-container'>
                    <img src={downArrow} className='expand-down-img' alt='scroll down arrow' />
                </div>
            </div>
            <div className='section'>
                <div className='awardWinning'>
                    <h3>AWARD WINNING</h3>
                    <h1>CINEMA PRODUCTION</h1>
                    <p>The Five Tribes production team is an independent video production company based in the Greater Philadelphia and South Jersey area. We produce a variety of work, ranging from commercials to our own narrative film projects. Let us make something beautiful for you.</p>
                </div>
                <div className='sectionMedia'>
                        <img src="https://i2.wp.com/blog.rememberlenny.com/wp-content/uploads/2020/10/7lAmICy.jpg?fit=1886%2C1258&ssl=1" alt="cinema production using unreal engine" />
                        <span className='sectionMedia--gradient'></span>
                </div>
            </div>
            <div className="marqueeContainer">
                <span className='marqueeGradient mgLeft'></span>
                <div className="marquee">
                    <img className="marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="marqueeLogo" src={usRowingLogo} alt="us rowing logo" />

                    {/* Duplicate content for infinite scrolling --> */}
                    <img className="marqueeLogoSpecial" src={pennLogo} alt="penn logo" />
                    <img className="marqueeLogo" src={aramarkLogo} alt="aramark logo" />
                    <img className="marqueeLogo" src={drexelLogo} alt="drexel logo" />
                    <img className="marqueeLogo" src={espnLogo} alt="espn logo" />
                    <img className="marqueeLogo" src={hfhLogo} alt="hfh logo" />
                    <img className="marqueeLogo" src={jeffersonLogo} alt="jefferson logo" />
                    <img className="marqueeLogoSpecial" src={nbcSportsLogo} alt="nbc sports logo" />
                    <img className="marqueeLogo" src={usRowingLogo} alt="us rowing logo" />
                </div>
                <span className='marqueeGradient mgRight'></span>
            </div>
        </>
    );
};

export default Home;
