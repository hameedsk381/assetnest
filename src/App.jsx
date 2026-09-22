import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function App() {
  const [searchMode, setSearchMode] = useState('Buy');

  const handleSearch = (event) => {
    event.preventDefault();
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell" id="home">
      <Header />

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Hyderabad / Private real estate advisory</p>
            <h1>Find the place your <em>next chapter</em> begins.</h1>
            <p className="hero-lede">Handpicked homes, intelligent investment guidance, and an easier way to move into Hyderabad's most coveted corridors.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#properties">Explore inventory <Arrow /></a>
              <a className="text-link" href="tel:+919391484751">Talk to an advisor <Arrow /></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>SS</span><span>AN</span><span>NR</span></div>
              <p><strong>Built on trust.</strong><br />Guidance for buyers, families, and global NRIs.</p>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/modern_house_pool_1772754806006.png" alt="Modern luxury home with a pool" />
            <div className="hero-stamp">AN<br /><small>EST. 2025</small></div>
            <div className="hero-caption"><span>Featured residence</span><strong>Contemporary living, Kokapet</strong></div>
            <div className="market-card">
              <span className="market-label">West Hyderabad</span>
              <strong>Demand is moving west.</strong>
              <div className="market-line"><span>Prime corridor index</span><b>+18.4%</b></div>
              <div className="line-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </section>

        <section className="property-search section-wrap" aria-label="Property search">
          <div className="search-tabs" role="tablist" aria-label="Search purpose">
            {['Buy', 'Rent', 'Invest'].map((mode) => <button key={mode} className={searchMode === mode ? 'active' : ''} onClick={() => setSearchMode(mode)} role="tab" aria-selected={searchMode === mode}>{mode}</button>)}
          </div>
          <form className="search-fields" onSubmit={handleSearch}>
            <label><span>Location</span><select defaultValue=""><option value="" disabled>Select a corridor</option><option>Kokapet</option><option>Gachibowli</option><option>Financial District</option><option>Rajendra Nagar</option></select></label>
            <label><span>Property type</span><select defaultValue=""><option value="" disabled>Choose a typology</option><option>3 BHK apartment</option><option>4 BHK apartment</option><option>Luxury villa</option><option>Villa plot</option></select></label>
            <label><span>Budget</span><select defaultValue=""><option value="" disabled>Select budget</option><option>Under ₹1 Cr</option><option>₹1 Cr - ₹2 Cr</option><option>₹2 Cr - ₹5 Cr</option><option>₹5 Cr +</option></select></label>
            <button className="search-submit" type="submit">Search <Arrow /></button>
          </form>
          <div className="search-foot"><span>Looking for something specific?</span><a href="tel:+919391484751">Speak to a property advisor <Arrow /></a></div>
        </section>

        <section className="signal-bar">
          <div><strong>01</strong><span>Curated inventory</span></div>
          <div><strong>02</strong><span>Transparent advisory</span></div>
          <div><strong>03</strong><span>End-to-end support</span></div>
          <div><strong>04</strong><span>NRI ready</span></div>
        </section>

        <section className="inventory section-wrap" id="properties">
          <div className="section-heading">
            <div><p className="eyebrow">The shortlist</p><h2>Homes worth<br /><em>coming home to.</em></h2></div>
            <div className="heading-side"><p>We do the first round of looking for you. Every address is considered for its design, location, title clarity, and long-term value.</p><a className="text-link light-link" href="#contact">View all properties <Arrow /></a></div>
          </div>
          <div className="property-grid">
            <PropertyCard imageSrc="/images/luxury_villa_1772754755766.png" title="Prestige Beverly Hills" subtitle="Kokapet / 3 & 4 BHK" tag="Apartments" price="From ₹X.XX Cr" />
            <PropertyCard imageSrc="/images/penthouse_interior_1772754782187.png" title="The Prestige City" subtitle="Rajendra Nagar / Coming soon" tag="Township living" price="Private preview" />
            <PropertyCard imageSrc="/images/modern_house_pool_1772754806006.png" title="Jayabheri Nirvana" subtitle="Gopanpally / 4 BHK villas" tag="Limited inventory" price="Request cost sheet" />
          </div>
        </section>

        <section className="advantage section-wrap" id="about">
          <div className="advantage-image"><img src="/images/penthouse_interior_1772754782187.png" alt="Refined penthouse interior" /><span className="image-note">A considered approach<br />to better living.</span></div>
          <div className="advantage-copy"><p className="eyebrow">The AssetNest advantage</p><h2>Less noise.<br /><em>More certainty.</em></h2><p className="large-copy">Real estate is personal. Our role is to make the important decisions clearer, from the first virtual walkthrough to the day you receive your keys.</p><div className="benefit-list"><div><b>01</b><span><strong>Zero-markup pricing</strong>Direct-from-developer terms. No hidden consultancy fees.</span></div><div><b>02</b><span><strong>Verified by design</strong>Legal titles, structural quality, and RERA compliance screened.</span></div><div><b>03</b><span><strong>Resale when ready</strong>A qualified buyer network for your next move.</span></div></div><a className="button button-outline" href="tel:+919391484751">Schedule a private consultation <Arrow /></a></div>
        </section>

        <section className="corridors section-wrap" id="insights">
          <div className="corridor-intro"><p className="eyebrow">Know your market</p><h2>Where the city<br /><em>is heading.</em></h2><p>We focus on the west and south corridors where thoughtful infrastructure and ambitious architecture are shaping Hyderabad's next decade.</p><a className="text-link" href="#contact">Get the market guide <Arrow /></a></div>
          <div className="corridor-list"><a href="#properties"><span>01</span><strong>Kokapet <i>&amp;</i> Gachibowli</strong><Arrow /></a><a href="#properties"><span>02</span><strong>HITEC City <i>&amp;</i> Financial District</strong><Arrow /></a><a href="#properties"><span>03</span><strong>Rajendra Nagar <i>&amp;</i> Tellapur</strong><Arrow /></a><a href="#properties"><span>04</span><strong>Kukatpally <i>&amp;</i> Gopanpally</strong><Arrow /></a></div>
        </section>

        <section className="nri-band" id="nri">
          <div className="section-wrap nri-inner"><div><p className="eyebrow">For the world, from Hyderabad</p><h2>Your home,<br /><em>handled locally.</em></h2></div><div className="nri-content"><p>From a thousand miles away, buying property should still feel personal. Our NRI desk combines video walkthroughs, clear reporting, FEMA guidance, and local representation in one calm process.</p><div className="nri-steps"><span><b>01</b>Virtual portfolio</span><span><b>02</b>Compliance support</span><span><b>03</b>Key handover</span></div><a className="button button-lime" href="https://wa.me/919391484751">Book a WhatsApp call <Arrow /></a></div></div>
        </section>

        <section className="founder section-wrap" id="resale">
          <div className="founder-mark">“</div><div className="founder-quote"><p className="eyebrow">A note from the founder</p><blockquote>In real estate, you aren't just buying square footage. You are investing your hard-earned capital into a legacy.</blockquote><p>Our mandate is simple: clear the noise, offer absolute transparency, and ensure every investor secures an asset that builds multi-generational wealth.</p><strong>Shaik Shareef <small>Founder, AssetNest Realtors</small></strong></div><div className="founder-side"><span>01</span><p>Clear advice<br />for lasting value.</p></div>
        </section>

        <section className="contact-card section-wrap" id="contact"><div><p className="eyebrow">Start a conversation</p><h2>Let's find your<br /><em>right address.</em></h2></div><div><p>Looking for an unlisted premium asset, a resale valuation, or a remote investment partner? We are one call away.</p><a className="button button-dark" href="tel:+919391484751">Call +91 9391484751 <Arrow /></a><a className="contact-email" href="mailto:info@assetnest.in">info@assetnest.in</a></div></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
