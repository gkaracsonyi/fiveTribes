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
                <title>Contact Us</title>
            </Helmet>
            <Header />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Please send us a message via the form below, and we'll get back to you as soon as possible.</p>
                
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default Contact;
