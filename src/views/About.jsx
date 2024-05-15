// ==================================================
// File: About.jsx
// Authors: @gkaracsonyi, @justingetty
// Purpose: About page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";
import React, { useState } from 'react'; 
import Header from '../elements/Header.jsx';
import './about.css'

const teamMembers = [
    {
        name: "Colin Stewart",
        role: "Director and Camera Operator",
        description: "Colin is a graduate of Drexel University who earned his degree in film and video. He is the owner of Five Tribes Cinema Productions and specializes in directing and camera operation.",
        image: "src/assets/2021/Colin-Stewart.jpg"
    },
    {
        name: "TJ Rumer",
        role: "Producer",
        description: "Terence “TJ” Rumer has been a producer with Five Tribes for the past year and a creative force within the company. He is currently pursuing a degree at Rider University.",
        image: "src/assets/2021/TJ-Rumer.jpg"
    },
    {
        name: "David Laverty",
        role: "Production Specialist",
        description: "David graduated from the University of Tampa with a BA in Film and Media Arts and is specialized as a camera operator and with lights and audio equipment on set.",
        image: "src/assets/2021/David-Laverty.jpg"
    },
    {
        name: "Greg Fischer",
        role: "Photographer",
        description: "Greg is a graduate student at Stockton University, focusing on wildlife and nature photography. He has worked as a still photographer on multiple projects.",
        image: "src/assets/2021/Greg-Fischer.jpg"
    },
    {
        name: "Chayse McLaughlin",
        role: "Camera Operator and Sound Mixer",
        description: "Chayse graduated from Drexel University with a degree in film and video and has worked on various projects including gripping and sound mixing.",
        image: "src/assets/2021/Chayse-McLaughlin.jpg"
    },
    {
        name: "Paul Giordano",
        role: "Multifaceted Crew Member",
        description: "Paul has experience working as an electric, audio engineer, grip, producer, actor, and stuntman. He brings humor and energy to every set.",
        image: "src/assets/2021/Paul-Giordano.jpg"
    }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleMembers = 3; // Adjust this if needed

    const next = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % (teamMembers.length - visibleMembers + 1));
    };

    const prev = () => {
        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) {
                return teamMembers.length - visibleMembers;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>About Us - Five Tribes Cinema Productions</title>
            </Helmet>
            <Header />
            <div className="mainContent">
                <div className="sliderContainer">
                    <button onClick={prev} className="slideButton left">‹</button>
                    <div className="teamContainer">
                        {teamMembers.slice(currentIndex, currentIndex + visibleMembers).map((member, index) => (
                            <div key={index} className="teamMember">
                                <img src={member.image} alt={member.name} className="memberImage" />
                                <div className="memberInfo">
                                    <h2>{member.name}</h2>
                                    <p>{member.role}</p>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={next} className="slideButton right">›</button>
                </div>
            </div>
        </>
    );
};

export default About;