import React from 'react';

const Header = () => (
    <header className="site-header">
        <a className="brand legacy-brand" href="#home" aria-label="AssetNest Realtors home"><span><strong className="cinzel">AssetNest</strong><small className="cinzel">— REALTORS —</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#properties">Inventory</a><a href="#nri">NRI desk</a><a href="#about">Our approach</a><a href="#insights">Market guide</a></nav>
        <a className="header-cta" href="tel:+919391484751">Schedule a call <span>↗</span></a>
    </header>
);

export default Header;
