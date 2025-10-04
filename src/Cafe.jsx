import React, { useState } from "react";
import "./Cafe.css"; // import CSS

const menuData = [
    { name: "Espresso", price: "₹120", img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" },
    { name: "Latte", price: "₹150", img: "https://th.bing.com/th/id/OIP.4KAM6OXq5dxqjN8KwksURQHaGQ?w=500" },
    { name: "Cappuccino", price: "₹140", img: "https://th.bing.com/th/id/OIP.Pe-S01F7qQmyT8Md6QyK_wHaE8?w=500" },
    { name: "Herbal Tea", price: "₹100", img: "https://th.bing.com/th/id/OIP.fbyW5aeaY_JOIDVO7uNzlgHaFF?w=500" },
    { name: "Brownie", price: "₹90", img: "https://th.bing.com/th/id/OIP.ePjv5qwIvU3EtRbZt2q7GQHaHa?w=500" },
];

const galleryImages = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=500&q=80",
];

const Cafe = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => setMenuActive(!menuActive);

    return (
        <div className="cafe-body">
            {/* Navbar + Hero */}
            <header id="home" className="hero-section">
                <nav className="navbar">
                    <h1 className="logo">MYCafé</h1>
                    <ul className={`nav-links ${menuActive ? "active" : ""}`}>
                        {["home", "about", "menu", "gallery", "booking", "contact", "feedback"].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setMenuActive(false)}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-toggle" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </nav>

                <div className="hero-content fade-in">
                    <h2>Welcome to MYCafé</h2>
                    <p>Warm Coffee. Vintage Vibes. Cozy Moments.</p>
                    <a href="#menu" className="btn">Explore Menu</a>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="section fade-in">
                <h2>About Us</h2>
                <div className="about-content">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" alt="About Café" />
                    <p>
                        Rustic Café is a cozy little space tucked away from the city buzz.
                        Our baristas pour passion into every cup, and our rustic décor makes
                        you feel right at home.
                    </p>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="section dark-section fade-in">
                <h2>Our Menu</h2>
                <div className="menu-grid">
                    {menuData.map((item, index) => (
                        <div key={index} className="menu-card zoom-in">
                            <img src={item.img} alt={item.name} />
                            <p>{item.name} - {item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section fade-in">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <img key={index} src={src} alt={`Cafe ${index + 1}`} className="gallery-img zoom-in" />
                    ))}
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="section dark-section fade-in">
                <h2>Reserve Your Spot</h2>
                <form className="form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="date" required />
                    <input type="time" required />
                    <input type="number" placeholder="No. of Guests" required />
                    <button type="submit" className="btn">Book Now</button>
                </form>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section fade-in">
                <h2>Contact Us</h2>
                <p><i className="fas fa-map-marker-alt"></i> 123 Vintage Lane, CoffeeTown</p>
                <p><i className="fas fa-phone"></i> +91-000000000</p>
                <p><i className="fas fa-envelope"></i> muser5388@gmail.com</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.500322232223!2d77.62250001499999!3d12.935192000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e2d%3A0xf8dfc3e8517e4fe0!2sRustic%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1694503422202!5m2!1sen!2sin" allowFullScreen loading="lazy" title="Cafe Location"></iframe>

            </section>

            {/* Feedback Section */}
            <section id="feedback" className="section dark-section fade-in">
                <h2>We’d Love Your Feedback</h2>
                <form className="form">
                    <textarea placeholder="Your feedback..." rows={4} required></textarea>
                    <button type="submit" className="btn">Send Feedback</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>
                    © 2025 Rustic Café | Follow us
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </p>
            </footer>
        </div>
    );
};

export default Cafe;
