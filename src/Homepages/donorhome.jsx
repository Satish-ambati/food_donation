import './LandingPage.css';
import sp1 from '../assets/landing/sp1.png';
import sp2 from '../assets/landing/sp2.png';
import sp3 from '../assets/landing/sp3.png';
import p2 from '../assets/landing/p2.png';
import p3 from '../assets/landing/p3.png';
import p4 from '../assets/landing/p4.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonorPage() {
  const navigate = useNavigate();
  const images = [sp1, sp2, sp3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <header className="header bg-green-700 p-4 shadow-md">
  <div className="nav-container flex justify-between items-center">
    <h1 className="logo text-white text-2xl font-bold">FoodShare</h1>
    <nav className="nav-links">
      <button
        onClick={() => navigate("/donatehistory")}
        className="bg-white text-green-700 font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-100 transition duration-300"
      >
        Dashboard
      </button>
    </nav>
  </div>
</header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Stop Wasting. Start Saving.</h2>
            <p>
              Our food wastage management system connects donors with shelters and NGOs to make sure surplus food never goes to waste.
            </p>
            <a href="#about" className="btn-primary">Learn More</a>
          </div>
          <div className="hero-image">
            <img src={images[currentIndex]} alt="Rotating banner" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h3>Why FoodSave?</h3>
        <p>
          Every year, millions of tons of food go to waste while countless people go hungry.
          FoodSave is a platform that bridges this gap, promoting sustainability and compassion.
          Together, we can reduce food waste and help feed those in need.
        </p>
      </section>

      <section id="impact" className="impact-section">
        <h3>Our Impact</h3>
        <div className="impact-cards">
          <div className="card">
            <img src={p2} alt="Meals saved" />
            <h4>5000+ Meals Saved</h4>
            <p>Redistributed to shelters and communities in need.</p>
          </div>
          <div className="card">
            <img src={p3} alt="Volunteers" />
            <h4>100+ Volunteers</h4>
            <p>Working round-the-clock to manage and deliver food.</p>
          </div>
          <div className="card">
            <img src={p4} alt="NGOs connected" />
            <h4>50+ NGOs Partnered</h4>
            <p>Ensuring food reaches the right hands in time.</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <h2>“Don’t waste food, someone needs it more than you think.”</h2>
        <p>Join us in our mission to reduce food waste and fight hunger.</p>
        <a href="#contact" className="btn-secondary" onClick={()=>navigate("/authentication")}>Get Involved</a>
      </section>

      <section id="contact" className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: fooddonation@gmail.com | Phone: +91-8106204119</p>
        <p>© 2025 FoodSave. All rights reserved.</p>
      </section>
    </div>
  );
}

export default DonorPage;
