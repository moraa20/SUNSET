import React, { useState } from "react";
import '../src/App.css';
import Restaurant from "./Bookings";
import Menu from "./Menu";

function Home() {
    const [showRestaurant, setShowRestaurant] = useState(false);

    const handleToggleRestaurant = () => {
        setShowRestaurant(!showRestaurant);
    };

    return (
        <section className="home" id='home'>
            <div className="home-content">
                <div className="box">
                    <h1>Welcome to SUNSET <span>SERENITY</span></h1>
                    <div className="social-icons">
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href='#'><i className='bx bxl-tiktok'></i></a>
                        <a href='#'><i className='bx bxl-facebook'></i></a>
                    </div>
                    <div className="btn-group">
                        <a href="#book" className="btn" onClick={handleToggleRestaurant}>
                            {showRestaurant ? 'Hide Reservation' : 'Make a Reservation'}
                        </a>
                        <a href="#contact" className="btn">Get in touch</a>
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                <h3>About Us</h3>
                <section>
                    <p>
                        Welcome to SUNSET SERENITY, where luxury meets comfort in the heart of Nairobi. We pride ourselves on offering an unforgettable experience, combining world-class hospitality with exquisite dining.

                        Our hotel boasts elegantly designed rooms and suites, each equipped with modern amenities to ensure a relaxing stay. Whether you’re here for business or leisure, our state-of-the-art facilities cater to all your needs.</p>
                </section>
                <section>
                    <p>Indulge in a culinary journey at our renowned restaurant, where our chefs create delectable dishes using the freshest ingredients. From local specialties to international favorites, every meal is a celebration of flavor.

                        At SUNSET SERENITY, our dedicated staff is committed to providing exceptional service, ensuring that your stay is nothing short of perfect. Join us and experience the ultimate blend of luxury and comfort.</p>
                </section>
                <section>
                    <p>Book your stay today and discover why SUNSET SERENITY is the premier choice for discerning travelers.</p>
                </section>
            </div>
            <Menu />
            {showRestaurant && <Restaurant />}

            <div className="testimonials" id="stories">
                <section className="testimonials-box">
                    <h2 className="story">Stories</h2>

                    <div className="wrapper">
                        <div className="testimonial-item">
                            <h2>Bella</h2>
                            <div className="rating">
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                            </div>
                            <p>
                                "Working with Sylvia was a fantastic experience. Their attention to detail and creative
                                approach in UI/UX design truly transformed our project. They delivered a user-friendly interface
                                that exceeded our expectations and made our app stand out."</p>
                        </div>

                        <div className="testimonial-item">
                            <h2>Meg</h2>
                            <div className="rating">
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                            </div>
                            <p>"As a frontend developer, Sylvia's consistently delivers high-quality work. Their proficiency
                                in modern web technologies and commitment to optimizing performance have been invaluable to our
                                projects. Their work is always professional and on point."</p>
                        </div>

                        <div className="testimonial-item">
                            <h2>Aiden</h2>
                            <div className="rating">
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                                <i className='bx bxs-star' id="star"></i>
                            </div>
                            <p>"The backend solutions provided by Sylvia have been instrumental in the success of our
                                platform. Their expertise in building scalable and secure APIs, along with their reliable
                                support, ensures our system runs smoothly and efficiently."</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="contact" id="contact">
                <h2 className="heading">Contact Us</h2>

                <form action="">
                    <div className="input-group">
                        <div className="input-box">
                            <input type="text" placeholder="Full Name"></input>
                            <input type="email" placeholder="Email"></input>
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Phone Number"></input>
                            <input type="text" placeholder="Subject"></input>
                        </div>
                    </div>
                    <div className="input-group-2">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send Message" className="btn"></input>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Home;
