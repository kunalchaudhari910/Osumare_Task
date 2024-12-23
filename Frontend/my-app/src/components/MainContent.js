import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main">
      <section id="about">
        <h1>Welcome to Osumare Marketing Solutions</h1>
        <p>We provide innovative marketing solutions tailored for your business needs.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service">Digital Marketing</div>
          <div className="service">SEO Optimization</div>
          <div className="service">Social Media Management</div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;
