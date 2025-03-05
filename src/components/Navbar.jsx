import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Navbar() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <img src="/images/cosmetic-logo.png" alt="Logo" className="logo" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav li">
                            <a className="nav-link list" href="#hero">HOME</a>
                            <a className="nav-link list" href="#products">PRODUCTS</a>
                            <a className="nav-link list" href="#services">SERVICES</a>
                            <a className="nav-link list" href="#contact">CONTACT</a>
                        </div>

                        {/* Search Bar */}
                        <form className="d-flex mx-auto search-form">
                            <input
                                className="form-control me-2 search-input"
                                type="search"
                                placeholder="Search products..."
                                aria-label="Search"
                            />
                            <button className="btn search-btn" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        {/* Login & Register Buttons */}
                        <div className="btns">
                            <button className="btn btn-outline me-2 login" onClick={() => setShowLogin(true)}>
                                Login
                            </button>
                            <button className="btn register" onClick={() => setShowRegister(true)}>
                                Register
                            </button>
                            <a href="/cart">
                                <i className="fas fa-shopping-cart cart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Popup */}
            {showLogin && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <h2 className='login-h2'>Login</h2>
                        <input type="text" placeholder="Enter Username" />
                        <input type="password" placeholder="Enter Password" />
                        <button className="submit-btn">Login</button>
                        <button className="cancel-btn" onClick={() => setShowLogin(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Register Popup */}
            {showRegister && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <h2 className='regis'>Register</h2>
                        <input type="text" placeholder="Enter Full Name" />
                        <input type="email" placeholder="Enter Email" />
                        <input type="password" placeholder="Enter Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button className="submit-btn">Register</button>
                        <button className="cancel-btn" onClick={() => setShowRegister(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
