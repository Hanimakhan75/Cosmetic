import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className="container mt-5 contact-pg" id='contact'>
            <h2 className='contact'>Contact Us</h2>
             <div className="d-flex justify-content-center">
            
            <form className='form'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        minLength="3"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        minLength="10"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn contact-submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;