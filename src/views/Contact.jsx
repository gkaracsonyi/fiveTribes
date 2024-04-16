// ==================================================
// File: Contact.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Contact page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";

import Header from '../elements/Header.jsx';

import './contact.css';

const Contact = () => {



    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Contact;