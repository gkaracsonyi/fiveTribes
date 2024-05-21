// ==================================================
// File: Nonprofit.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Nonprofit events page for FTCP website
// Updated: April 2024
// ==================================================

import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './nonprofit.css';

const Nonprofit = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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