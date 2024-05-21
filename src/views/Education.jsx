// ==================================================
// File: Education.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Educational events page for FTCP website
// Updated: April 2024
// ==================================================

import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './education.css';

const Education = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Educational Events</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Education;