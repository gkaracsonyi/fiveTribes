// ==================================================
// File: Home.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Home page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';

import Header from '../elements/Header';

import './home.css';

const Home = () => {



    return (
        <>
            <Helmet>
                <title>Five Tribes Cinema Productions</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Home;
