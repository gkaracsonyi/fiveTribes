// ==================================================
// File: Athletics.jsx
// Authors: @gkaracsonyi, @justingetty
// Purpose: Athletic events page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";
import { useEffect } from "react";

import Header from '../elements/Header.jsx';

import './athletics.css';

const Athletics = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Athletic Events</title>
            </Helmet>
            <Header />

            <div className = "penis">
                <h1>Penis haha</h1>
            </div>
        </>
    );
};

export default Athletics;