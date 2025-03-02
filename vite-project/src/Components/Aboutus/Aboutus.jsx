import React from "react";
import { NavLink } from "react-router-dom";
import "./Aboutus.css";


const Aboutus = () => {
  return (
    <div className="aboutus-page">


      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My World</h1>
          <p>
            I believe in creating experiences that inspire, connect, and make a
            difference. Dive into our story and discover what drives us.
          </p>
        </div>
      </section>

      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-cards">
          <NavLink to="/meals" className="card">
            <div className="card-icon">🍴</div>
            <h3>Meals</h3>
            <p>Delicious recipes, gourmet cooking tips, and more.</p>
          </NavLink>
          <NavLink to="/cocktail" className="card">
            <div className="card-icon">🍹</div>
            <h3>Cocktails</h3>
            <p>Craft the perfect drink with our curated recipes.</p>
          </NavLink>
          <NavLink to="/harrypotter" className="card">
            <div className="card-icon">⚡</div>
            <h3>Harry Potter</h3>
            <p>Discover the magic of the wizarding world.</p>
          </NavLink>
          <NavLink to="/bank" className="card">
            <div className="card-icon">💳</div>
            <h3>Bank</h3>
            <p>Smart financial tips to help you thrive.</p>
          </NavLink>
        </div>
      </section>



      <section className="about">
        <h2>Who We Are</h2>
        <p>
          Established in 2015, we’ve grown into a platform that caters to
          diverse passions: from culinary delights and cocktails to fandoms and
          finance. Everything we do, we do with purpose and creativity.
        </p>
      </section>




      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"This website is my go-to for creative recipes and fun cocktails!"</p>
            <span>- Jamie L.</span>
          </div>
          <div className="testimonial">
            <p>"The Harry Potter section is a magical escape for all fans."</p>
            <span>- Alex K.</span>
          </div>
          <div className="testimonial">
            <p>"Their financial insights helped me save smarter and live better."</p>
            <span>- Mia W.</span>
          </div>
        </div>
      </section>


      <footer>
        <p>© 2024 Our World. All Rights Reserved. Made with ❤️ for you.</p>
      </footer>
    </div>
  );
};

export default Aboutus;
