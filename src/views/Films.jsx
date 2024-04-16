// ==================================================
// File: Films.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Independent films page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';

import Header from '../elements/Header.jsx';

import './films.css';

const Films = () => {



    return (
        <>
            <Helmet>
                <title>Independent Films</title>
            </Helmet>
            <Header />
        </>
    );
};

export default Films;