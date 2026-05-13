import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1 className="logo-main"><span className="cinzel" style={{ fontWeight: 600 }}>AssetNest</span></h1>
                <div style={{ color: 'var(--gold-color)', letterSpacing: '5px', fontSize: '0.8rem', opacity: 0.9 }} className="cinzel">— REALTORS —</div>
            </div>
            <div className="nav-line"></div>
            <nav>
                <ul>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#properties">Properties</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#dreamhomes">Dream Homes</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
