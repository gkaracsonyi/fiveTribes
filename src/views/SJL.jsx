// ==================================================
// File: SJL.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: SJL Racing page for FTCP website
// Updated: April 2024
// ==================================================

import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './sjl.css';

const SJL = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>SJL Racing</title>
            </Helmet>
            <Header />
        </>
    );
};

export default SJL;