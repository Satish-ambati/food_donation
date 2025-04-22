import React from 'react';
import './About.css';

const About = () => {
  console.log("About component loaded");
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="logo">FoodShare</h1>
      </header>

      <div className="about-container fade-in">
        <section className="intro">
          <h1>About FoodShare</h1>
          <p>
            <strong>FoodShare</strong> is a community-driven platform that bridges the gap between food surplus and hunger.
            We empower restaurants, event organizers, and households to donate excess food to verified NGOs and individuals in need.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Every day, edible food is wasted while many go hungry. FoodShare is on a mission to eliminate this imbalance by facilitating
            easy and safe food donations. We aim to promote a sustainable culture of giving, reduce food waste, and serve those in need.
          </p>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li><strong>Donors:</strong> Restaurants, events, and households register and post available food donations.</li>
            <li><strong>Recipients:</strong> Verified NGOs and individuals can browse, request, and receive donations.</li>
            <li><strong>Matching:</strong> Our system matches donations with recipients based on location, availability, and need.</li>
            <li><strong>Transparency:</strong> Real-time tracking and feedback ensure safe and fair distribution.</li>
          </ul>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To create a world where food is never wasted, and every person has access to nourishment. We envision a connected society
            driven by compassion, sustainability, and innovation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;