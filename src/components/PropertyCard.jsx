import React from 'react';

const PropertyCard = ({ imageSrc, title, subtitle, tag, price }) => (
    <article className="property-card">
        <div className="property-image-wrap"><img src={imageSrc} alt={title} /><span className="property-tag">{tag}</span><span className="property-arrow">↗</span></div>
        <div className="property-info"><div><h3>{title}</h3><p>{subtitle}</p></div><strong>{price}</strong></div>
    </article>
);

export default PropertyCard;
