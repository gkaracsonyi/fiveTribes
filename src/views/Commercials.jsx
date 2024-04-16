// ==================================================
// File: Commercials.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Page for showcasing commercials on FTCP
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './commercials.css';

const Commercials = () => {



    return (
        <>
            <Helmet>
                <title>Commercials</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Commercials;