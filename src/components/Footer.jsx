import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Footer() {
  return (
    <footer className=" py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We are Glamour Cosmetics, dedicated to providing high-quality beauty products.
            </p>
            <ul className="list-unstyled">
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Connect With Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com/" className="me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/" className="me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="mt-3">
              <p>Subscribe to our newsletter:</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn fotter-btn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Glamour Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;