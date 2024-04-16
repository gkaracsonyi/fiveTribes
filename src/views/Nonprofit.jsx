// ==================================================
// File: Nonprofit.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Nonprofit events page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './nonprofit.css';

const Nonprofit = () => {



    return (
        <>
            <Helmet>
                <title>Nonprofit Events</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Nonprofit;