import React from 'react';

const PropertyCard = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="property-card">
            <img src={imageSrc} alt={title} />
            <div className="card-info">
                <h4>{title}</h4>
                {subtitle && <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '4px' }}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PropertyCard;
