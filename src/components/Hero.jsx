import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
    return (
        <div id='hero'>
            <div className="carousel-container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slide 1 - Image */}
                        <div className="carousel-item active">
                            <img
                                src="https://typsybeauty.com/cdn/shop/files/website_banner_desktop.jpg?v=1740642090&width=2000"
                                className="d-block  "
                                alt="Slide 1"
                            />
                        </div>
                        {/* Slide 2 - Image */}
                        <div className="carousel-item">
                            <img
                                src="https://cdn-eu.dynamicyield.com/api/9879321/images/2bf43381d2c7d__home_page-top_carousel-huda_beauty_desktop.jpg?dpr=1"
                                className="d-block  "
                                alt="Slide 2"
                            />
                        </div>
                        {/* Slide 3 - Image */}
                        <div className="carousel-item">
                            <img
                                src="https://cdn-eu.dynamicyield.com/api/9879321/images/67da9492a90f__wishcare_desktop.jpg?dpr=1"
                                className="d-block  "
                                alt="Slide 3"
                            />
                        </div>
                    </div>
                    {/* Carousel Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className='steal'>
                <h4>STEAL WORTHY COMBOS</h4>
            </div>
            {/* <div className="container-fluid"> */}
                <div className="  cards w-100 trend hero-cards">
                    <div className=" card image-card-1 img-card-1 " >
                        <img src="https://www.lakmeindia.com/cdn/shop/files/sdxfg.jpg?v=1737702172" className="card-img-top " alt="..." />
                        <div className="card-body trend-word ">
                            <h6 className="card-text lake">Lake Me Cream Foundation</h6>
                            <p>Starts at 299$</p>
                        </div>
                    </div>

                    <div className=" card image-card-1 img-card-1 " >
                        <img src="https://www.lakmeindia.com/cdn/shop/files/29838_H_8901030698668.jpg?v=1738848160" className="card-img-top" alt="..." />
                        <div className="card-body trend-word">
                            <h6 className="card-text lake">Lake Me Powder</h6>
                            <p>Starts at 399$</p>
                        </div>
                    </div>

                    <div className=" card image-card-1 img-card-1 " >
                        <img src="https://www.lakmeindia.com/cdn/shop/files/29837_H-890103070191.jpg?v=1737701929" className="card-img-top" alt="..." />
                        <div className="card-body trend-word">
                            <h6 className="card-text lake">Lake Me Sunscreen</h6>
                            <p>Starts at 199$</p>
                        </div>
                    </div>

                    <div className="-4 card image-card-1 img-card-1  " >
                        <img src="https://www.lakmeindia.com/cdn/shop/files/29853_H-890103070148.jpg?v=1737701351" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-text trend-word lake">Lake Me BB Cream</h6>
                            <p>Starts at 499$</p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Hero;
