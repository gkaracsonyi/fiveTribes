// ==================================================
// File: SJL.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: SJL Racing page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './sjl.css';

const SJL = () => {



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