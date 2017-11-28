import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-column">
                <i className="material-icons medium">map</i>
                <p className="contact-header">LOCATION</p>
                <span>5867 S. CROCKER ST.</span>
                <span>LOS ANGELES, CA 90003</span>
            </div>
            <div className="contact-column">
                <i className="material-icons medium">email</i>
                <p className="contact-header">EMAIL</p>
                <a href="mailto:focusla@yahoo.com">focusla@yahoo.com</a>
            </div>
            <div className="contact-column">
                <i className="material-icons medium">local_phone</i>
                <p className="contact-header">TEL</p>
                <span>323.234.2030</span>
            </div>
            <div className="contact-column">
                <i className="material-icons medium">print</i>
                <p className="contact-header">FAX</p>
                <span>323.234.2026</span>
            </div>
        </div>
    );
};

export default Contact;
