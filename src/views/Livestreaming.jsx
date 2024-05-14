// ==================================================
// File: Livestreaming.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Livestreaming page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './livestreaming.css';

const pageDescription = "Five Tribes Cinema Productions provides live production support, trusted by NBC Sports, US Rowing, and the Dad Vail Regatta."

const Livestreaming = () => {



    return (
        <>
            <Helmet>
                <title>Livestreaming</title>
                <meta name='description' content={pageDescription} />
            </Helmet>
            <Header />
        </>
    );
};

export default Livestreaming;