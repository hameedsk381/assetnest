import React from 'react';

const HeroBadge = () => {
    return (
        <div className="logo-badge">
            <div className="logo-badge-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.2L18.8 13H17v6H7v-6H5.2L12 6.2z" />
                    <path d="M10 10h4v4h-4z" />
                </svg>
            </div>
            <h2 className="logo-main" style={{ marginBottom: 0 }}><span className="cinzel" style={{ fontSize: '2rem' }}>AssetNest</span></h2>
            <div style={{ color: 'var(--gold-color)', fontSize: '0.7rem', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase' }} className="cinzel">— Realtors —</div>
            <div className="logo-badge-subtitle" style={{ fontFamily: "'Playfair Display', serif" }}>Invest in Your Dreams</div>
        </div>
    );
};

export default HeroBadge;
