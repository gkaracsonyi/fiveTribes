// ==================================================
// File: Films.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Independent films page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';

import Header from '../elements/Header.jsx';

import './films.css';

const film1_name = 'MIDSOMMAR';
const film1_description = "A couple travel to Sweden to visit their friend's rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.";
const film1_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/midsommar.jpeg';
const film1_alt = film1_name + ' movie banner';

const film2_name = 'HEREDITARY';
const film2_description = "When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.";
const film2_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/hereditary.png';
const film2_alt = film2_name + ' movie banner';

const film3_name = 'PARASITE';
const film3_description = "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.";
const film3_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/parasite.jpg';
const film3_alt = film3_name + ' movie banner';

const Films = () => {



    return (
        <>
            <Helmet>
                <title>Independent Films</title>
            </Helmet>
            <Header />
            <div className='filmHeroContainer'>
                <div className='filmContainer container1'>
                    <img src={film1_backgroundImage} alt={film1_alt} />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>{film1_name}</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>{film1_description}</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>{film1_name}</h1>
                    </div>
                </div>
                <div className='filmContainer container2'>
                    <img src={film2_backgroundImage} alt={film2_alt} />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>{film2_name}</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>{film2_description}</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>{film2_name}</h1>
                    </div>
                </div>
                <div className='filmContainer container3'>
                    <img src={film3_backgroundImage} alt={film3_alt} />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>{film3_name}</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>{film3_description}</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>{film3_name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Films;