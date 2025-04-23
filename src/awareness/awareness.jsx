import React from 'react';
import './AwarenessBlog.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const AwarenessBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Food Donation Awareness Blog</h1>
        <p>Educating and encouraging people to help reduce food wastage and donate to those in need.</p>
      </header>

      <section className="blog-post">
        <article className="blog-post-content">
          <h2>The Importance of Food Donation</h2>
          <p>
            Food donation is one of the easiest ways to help those who are less fortunate. It helps
            in reducing food wastage and ensures that people in need have access to meals. Many
            organizations and initiatives work towards this noble cause, and you can be a part of this
            too by simply donating surplus food. 
          </p>

          <h3>Why Donate Food?</h3>
          <ul>
            <li>Help reduce food wastage</li>
            <li>Provide nutritious meals to those in need</li>
            <li>Make a positive impact in your community</li>
            <li>Support local food banks and NGOs</li>
          </ul>

          <p>
            If you're wondering how to donate food, it's simple. You can connect with local
            organizations or use platforms designed to help donors reach those in need. Whether
            you're a restaurant, an event organizer, or an individual with extra food, donating
            can change lives.
          </p>

          <h3>How You Can Contribute</h3>
          <p>
            There are various ways you can contribute:
            <ul>
              <li>Donate food from restaurants, events, or households</li>
              <li>Volunteer with food banks</li>
              <li>Spread awareness about food donations</li>
            </ul>
          </p>

          <h3>Our Mission</h3>
          <p>
            Our goal is to make food donations accessible to everyone. By connecting donors and
            recipients, we hope to reduce hunger and make a difference in communities across the world.
          </p>

          <div className="call-to-action">
            <button className="donate-now-btn" onClick={()=>navigate("/authentication")}>Donate Now</button>
          </div>
        </article>
      </section>

      <footer className="blog-footer">
        <p>&copy; 2025 Food Donation Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AwarenessBlog;