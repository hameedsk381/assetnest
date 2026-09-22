import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';
import HeroBadge from './components/HeroBadge';

function App() {
  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="container" id="home">
      <Header />

      <main className="main-content">
        <section className="left-col">
          <HeroBadge />
          <button className="btn" onClick={() => scrollTo('properties')}>Search Properties</button>

          <div className="icons-row">
            <svg viewBox="0 0 24 24" aria-label="Email"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
            <svg viewBox="0 0 24 24" aria-label="Property"><path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z" /></svg>
            <svg viewBox="0 0 24 24" aria-label="Key"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4h2.35v4h4v-4h2v-4h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
          </div>

          <div className="text-section" id="about">
            <h3 className="script-title">Your Gateway to Hyderabad</h3>
            <h2>ULTRA-PREMIUM<br />REAL ESTATE</h2>
            <p>Trusted advisory, handpicked inventory, and seamless end-to-end processing for domestic buyers and global NRIs.</p>
            <button className="btn" onClick={() => scrollTo('contact')}>Schedule Consultation</button>
          </div>

          <div className="property-image">
            <div className="badge-overlay"><svg viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.2L18.8 13H17v6H7v-6H5.2L12 6.2z" /></svg></div>
            <img src="/images/luxury_villa_1772754755766.png" alt="Luxury villa in Hyderabad" />
          </div>

          <div className="text-section" id="nri">
            <h3 className="script-title">NRI Investment Desk</h3>
            <h2>SEAMLESS REMOTE<br />INVESTING</h2>
            <p>Capitalize on Hyderabad's fastest-growing real estate corridors with 100% remote legal execution, transparent visual reporting, and local representation.</p>
            <p><strong>01. Virtual Consultation & Portfolios</strong><br />Personal video walkthroughs, 3D aerial views, and clear micro-market appreciation reports.</p>
            <p><strong>02. Regulatory Compliance Support</strong><br />Guidance through NRE/NRO banking, FEMA regulations, and power-of-attorney documentation.</p>
            <p><strong>03. End-to-End Asset Handover</strong><br />Support from document execution through key handover and rental or resale onboarding.</p>
            <button className="btn" onClick={() => scrollTo('contact')}>Book a Zoom / WhatsApp Call</button>
          </div>

          <div className="text-section">
            <h3 className="script-title">A Foundation Built on Trust</h3>
            <h2>THE FOUNDER'S<br />MESSAGE</h2>
            <p>"In real estate, you aren't just buying square footage - you are investing your hard-earned capital into a legacy. At AssetNest, our mandate is simple: clear the noise, offer absolute transparency, and ensure that every investor, whether local or sitting thousands of miles away, secures an asset that builds multi-generational wealth."</p>
            <p><strong>- Shaik Shareef, Founder, AssetNest Realtors</strong></p>
          </div>
        </section>

        <section className="right-col" id="properties">
          <div className="cards-grid">
            <PropertyCard imageSrc="/images/luxury_villa_1772754755766.png" title="Prestige Beverly Hills" subtitle="Kokapet | 3 & 4 BHK | INR X.XX Cr onwards" />
            <PropertyCard imageSrc="/images/penthouse_interior_1772754782187.png" title="The Prestige City" subtitle="Rajendra Nagar | Premium Apartments & Villas | Coming Soon" />
            <PropertyCard imageSrc="/images/modern_house_pool_1772754806006.png" title="Jayabheri Nirvana" subtitle="Gopanpally / Gachibowli | 4 BHK Luxury Villas | Limited Inventory" />
            <PropertyCard imageSrc="/images/luxury_villa_1772754755766.png" title="Curated Modern Landmarks" subtitle="Handpicked inventory across Hyderabad's prime corridors" />
          </div>

          <div className="property-image full-card" id="dreamhomes">
            <div className="badge-overlay"><svg viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.2L18.8 13H17v6H7v-6H5.2L12 6.2z" /></svg></div>
            <img src="/images/modern_house_pool_1772754806006.png" alt="Modern gated community home in Hyderabad" />
          </div>

          <div className="text-section">
            <h3 className="script-title">The AssetNest Advantage</h3>
            <h2>WHY DISCERNING<br />BUYERS CHOOSE US</h2>
            <p><strong>Zero-Markup Pricing:</strong> Direct-from-developer pricing with completely transparent terms and no hidden consultancy fees.</p>
            <p><strong>Handpicked, Verified Inventory:</strong> We screen structural quality, legal titles, and RERA compliance before a project joins our portfolio.</p>
            <p><strong>Dedicated NRI Desk:</strong> Tailored asset management, remote video walkthroughs, and legal assistance across global time zones.</p>
            <p><strong>Elite Resale Wing:</strong> Friction-free liquidation and secondary-market transitions for your investments.</p>
            <button className="btn" onClick={() => scrollTo('contact')}>Request Private Inventory Catalog</button>
          </div>

          <div className="text-section" id="resale">
            <h3 className="script-title">The Resale Wing</h3>
            <h2>LIQUIDATE OR<br />UPGRADE EFFORTLESSLY</h2>
            <p>Benefit from AssetNest's extensive, qualified buyer network to sell your premium Hyderabad property at the right market valuation.</p>
            <p><strong>Targeted Premium Exposure:</strong> Reach high-net-worth individuals and vetted investors.</p>
            <p><strong>Production-Grade Marketing:</strong> High-definition walkthroughs and dedicated Instagram and YouTube reels.</p>
            <p><strong>Friction-Free Paperwork:</strong> Handling of transfer legalities, builder NOCs, and financial tracking.</p>
            <button className="btn" onClick={() => scrollTo('contact')}>Submit Property Details</button>
          </div>

          <div className="text-section" id="insights">
            <h3 className="script-title">Market Insights</h3>
            <h2>WEST & SOUTH<br />HYDERABAD</h2>
            <p>Discover which sectors in Kokapet and Rajendra Nagar are projected to grow the fastest by next year with our West Hyderabad Micro-Market Pricing Guide.</p>
            <button className="btn" onClick={() => scrollTo('contact')}>Get Free PDF Report</button>
          </div>

          <div className="text-section">
            <h3 className="script-title">Private Inventory</h3>
            <h2>LOOKING FOR AN<br />UNLISTED ASSET?</h2>
            <p>Get access to pre-launch pricing, private villa inventories, and micro-market data sheets directly in your inbox.</p>
            <p><strong>Request Private Inventory Catalog</strong><br />Share your name, phone number, email address, and desired budget with an AssetNest advisor.</p>
          </div>
        </section>
      </main>

      <div className="consultation-section" id="contact">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
        <button className="btn" onClick={() => window.location.href = 'tel:+919391484751'}>Call +91 9391484751</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
