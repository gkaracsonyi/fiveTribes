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
            <div className='filmHeroContainer'>
                <div className='filmContainer container1'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5d4ba6863e231f0001e703e7/1618289532850-IK46X694AD3REA3Y5NEF/midsommar.jpeg" alt="midsommar" />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>MIDSOMMAR</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>A couple travel to Sweden to visit their friend's rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>MIDSOMMAR</h1>
                    </div>
                </div>
                <div className='filmContainer container2'>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*Eyd8UejypiHoK6IRvQspoQ.png" alt="hereditary" />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>HEREDITARY</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>HEREDITARY</h1>
                    </div>
                </div>
                <div className='filmContainer container3'>
                    <img src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/10/Parasite-2019.jpg" alt="parasite" />
                    <div className='overlay'>
                        <div className='overlay--heading'>
                            <h1>PARASITE</h1>
                        </div>
                        <div className='overlay--body'>
                            <p className='overlay--body--descripion'>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
                            <div className='overlay--body--buttonContainer'>
                                <button className='overlay--body--watchButton'>WATCH</button>
                            </div>
                        </div>
                    </div>
                    <div className='textContainer'>
                        <h1>PARASITE</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Films;