// ==================================================
// File: Films.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Independent films page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from 'react-helmet';
import { useEffect, useState, useRef } from 'react';

import Header from '../elements/Header.jsx';
import Footer from '../elements/Footer.jsx';

import './films.css';

// VARIABLE TEXT AND REMOTE MEDIA
// Meta tags (for SEO and bots)
const pageDescription = "Films independently produced by Five Tribes Cinema Productions.";

// Page Hero (variable names are pretty self explanatory)
const film1_name = 'MIDSOMMAR';
const film1_description = "A couple travel to Sweden to visit their friend's rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.";
const film1_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/midsommar.jpeg';

const film2_name = 'HEREDITARY';
const film2_description = "When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.";
const film2_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/hereditary.png';

const film3_name = 'PARASITE';
const film3_description = "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.";
const film3_backgroundImage = 'https://cdn.geekay.one/five-tribes-cinema-productions/parasite.jpg';


const Films = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        // Fetch film gallery from the database
        const fetchFilms = async () => {
            const url = "https://pg.geekay.one/ftcp/independent_films";
            const requestBody = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            try {
                const response = await fetch(url, requestBody);
                if (response.ok) {
                    const data = await response.json();
                    setFilms(data);
                    console.log("Response:", data); // FOR DEV ONLY
                } else {
                    console.error("Failed to fetch:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchFilms();
    }, []);

    const formatReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };

    const handleOverlayClick = (event) => {
        if (event.target === overlayRef.current) {
            setSelectedFilm(null);
        }
    };

    return (
        <>
            <Helmet>
                <title>Independent Films</title>
                <meta name='description' content={pageDescription} />
            </Helmet>
            <Header />
            <div className='filmHeroContainer'>
                <div className='filmContainer filmContainer1'>
                    <img src={film1_backgroundImage} alt={film1_name + ' movie banner'} />
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
                <div className='filmContainer filmContainer2'>
                    <img src={film2_backgroundImage} alt={film2_name + ' movie banner'} />
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
                <div className='filmContainer filmContainer3'>
                    <img src={film3_backgroundImage} alt={film3_name + ' movie banner'} />
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
            <div className='filmMain'>
                <div className='filmGallery'>
                    <div className='filmGallery--heading'>
                        <h1>GALLERY</h1>
                    </div>
                    <div className='filmGallery--container grid'>
                        {films.map(film => (
                            <div className={'flimGallery--filmContainer ' + film.film_id} key={film.film_id} onClick={() => setSelectedFilm(film)}>
                                <img src={film.cover_image} alt={film.title} />
                            </div>
                        ))}
                        {selectedFilm && (
                            <div className="flimInfoOverlay--overlay" ref={overlayRef} onClick={handleOverlayClick}>
                                <div className="flimInfoOverlay--overlay-content">
                                    <span className="flimInfoOverlay--close-button" onClick={() => setSelectedFilm(null)}>
                                        &times;
                                    </span>
                                    <img src={selectedFilm.cover_image} alt={selectedFilm.title} />
                                    <div className="filmInfoOverlay--filmInfo">
                                        <div className='filmInfoOverlay--heading'>
                                            <h2>{selectedFilm.title}</h2>
                                            {selectedFilm.mature_tag ? (
                                                <p className='filmInfoOverlay--matureTag'>MATURE</p>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        <p>{formatReleaseYear(selectedFilm.release_date)} - {selectedFilm.runtime_minutes} min</p>
                                        <p>{selectedFilm.description}</p>
                                        <p>Director: {selectedFilm.director}</p>
                                        <p>Language: {selectedFilm.language}</p>
                                        {selectedFilm.watch_link ? (
                                            <a href={selectedFilm.watch_link} target='_blank'>
                                                <button className='filmInfoOverlay--watchButton'>WATCH</button>
                                            </a>
                                        ) : (
                                            <button className='filmInfoOverlay--watchButtonDisabled' disabled>
                                                WATCH
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Films;