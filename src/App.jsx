import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';
import HeroBadge from './components/HeroBadge';

function App() {
  return (
    <div className="container" id="home">
      <Header />

      <main className="main-content">

        {/* Left Column */}
        <section className="left-col">
          <HeroBadge />

          <button className="btn" onClick={() => document.getElementById('properties').scrollIntoView({ behavior: 'smooth' })}>
            Discover Your Dream Home
          </button>

          <div className="icons-row">
            <svg viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4h2.35v4h4v-4h2v-4h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
          </div>

          <div className="text-section" id="about">
            <h3 className="script-title">Invest in Your Dreams</h3>
            <h2>CURATED<br />PORTFOLIO</h2>
            <p>
              Explore our handpicked selection of premium properties. Each home is meticulously evaluated to ensure it meets our rigorous standards for luxury, location, and lifestyle. Let us guide you to a residence that exemplifies your achievements and aspirations.
            </p>
            <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact our Agents</button>
          </div>

          <div className="property-image">
            <div className="badge-overlay">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.2L18.8 13H17v6H7v-6H5.2L12 6.2z" /></svg>
            </div>
            <img src="/images/luxury_villa_1772754755766.png" alt="Luxury Modern Villa at Dusk" />
          </div>

        </section>

        {/* Right Column */}
        <section className="right-col" id="properties">

          <div className="cards-grid">
            <PropertyCard
              imageSrc="/images/luxury_villa_1772754755766.png"
              title="Luxury Villa - Bangalore"
              subtitle="4 Beds • 5 Baths • 6,500 sqft"
            />
            <PropertyCard
              imageSrc="/images/penthouse_interior_1772754782187.png"
              title="Elegant - Penthouse"
              subtitle="3 Beds • 3.5 Baths • Skyline View"
            />
            <PropertyCard
              imageSrc="/images/modern_house_pool_1772754806006.png"
              title="The Grand View - Pune"
              subtitle="5 Beds • Pool • Smart Home"
            />
            <PropertyCard
              imageSrc="/images/luxury_villa_1772754755766.png"
              title="City View Apartment - Mumbai"
              subtitle="2 Beds • 2 Baths • Premium Amenities"
            />
          </div>

          <div className="property-image full-card" id="dreamhomes">
            <div className="badge-overlay">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.2L18.8 13H17v6H7v-6H5.2L12 6.2z" /></svg>
            </div>
            <img src="/images/modern_house_pool_1772754806006.png" alt="Modern Minimalist House with Pool" />
          </div>

          <div className="text-section">
            <h3 className="script-title">Our Expertise</h3>
            <h2>GLOBAL <br />REACH</h2>
            <p>
              Experience unparalleled service with our dedicated team of real estate experts. With decades of combined expertise in luxury markets across the country, we provide discreet, comprehensive guidance from your initial consultation to successful acquisition.
            </p>
            <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Consult With Us</button>
          </div>

        </section>

      </main>

      {/* Bottom Consultation */}
      <div className="consultation-section">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
        <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Request a Property Consultation</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
