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

const Home = () => {



    return (
        <>
            <Helmet>
                <title>Five Tribes Cinema Productions</title>
            </Helmet>
            <Header />
            <div className='heroContainer'>
                <video src='https://geekay.one/media-assets/site-banner.mov' autoPlay loop muted preload='true'></video>
                <div class='svg-container'>
                    <img src={downArrow} class='expand-down-img' alt='scroll down arrow' />
                </div>
            </div>
        </>
    );
};

export default Home;
