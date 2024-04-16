// ==================================================
// File: Education.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Educational events page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './education.css';

const Education = () => {



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