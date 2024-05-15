// ==================================================
// File: Contact.jsx
// Authors: @gkaracsonyi, @JustinGetty
// Purpose: Contact page for FTCP website
// Updated: April 2024
// ==================================================

import { Helmet } from "react-helmet";
import Header from '../elements/Header.jsx';
import './contact.css';
import Footer from '../elements/Footer';


/*Note: use this as background, add opacity to the page; src/assets/2021/Screen-Shot-2021-01-03-at-9.16.20-AM-1.png*/
const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Convert FormData to a URL encoded string
        const formProps = new URLSearchParams(formData).toString();

        fetch('https://yourdomain.com/sendmail.php', {
            method: 'POST',
            body: formProps,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Important for PHP to correctly parse the POST data
            },
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Header />
            <div className="contact-wrapper">
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Please send us a message via the form below, and we'll get back to you as soon as possible.</p>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="inline-group">
                            <div className="form-group">
                                <label htmlFor="first-name">First Name<span className="required">*</span></label>
                                <input type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last-name">Last Name<span className="required">*</span></label>
                                <input type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className="inline-group">
                            <div className="form-group">
                                <label htmlFor="email">Email<span className="required">*</span></label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className="subject-group">
                            <label htmlFor="subject">Subject<span className="required">*</span></label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message<span className="required">*</span></label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
