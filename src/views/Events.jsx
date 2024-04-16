// ==================================================
// File: Events.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Events page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';

import Header from '../elements/Header.jsx';

import './events.css';

const Events = () => {



    return (
        <>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Events;