import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  return (
    <div className="container mt-5" id="services">
      <h2 className="text-center mb-4 service">Our Services</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Makeup Consultations</h5>
              <p className="card-text">
                Personalized makeup consultations tailored to your unique style
                and needs.
              </p>
              <a href="/consultations" className="btn services-btn mt-auto">
                {/* mt-auto pushes button to bottom */}
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Beauty Workshops</h5>
              <p className="card-text">
                Hands-on workshops to enhance your beauty skills and learn new
                techniques.
              </p>
              <a href="/workshops" className="btn services-btn mt-auto">
                View Schedule
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Bridal Makeup</h5>
              <p className="card-text">
                Professional bridal makeup services to make your special day even
                more beautiful.
              </p>
              <a href="/bridal" className="btn services-btn mt-auto">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Skincare Analysis</h5>
              <p className="card-text">
                Detailed skin analysis to determine the best skincare routine for
                you.
              </p>
              <a href="/skincare" className="btn services-btn mt-auto">
                Discover More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Product Recommendations</h5>
              <p className="card-text">
                Expert recommendations on products that suit your skin type and
                preferences.
              </p>
              <a
                href="/recommendations"
                className="btn services-btn mt-auto"
              >
                Get Recommendations
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 cards">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Special Occasion Makeup</h5>
              <p className="card-text">
                Makeup services for any special occasion, from parties to
                events.
              </p>
              <a href="/occasions" className="btn services-btn mt-auto">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;