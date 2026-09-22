import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-col">
                <h5>ASSETNEST REALTORS</h5>
                <p>AssetNest Realtors is Hyderabad's premier real estate advisory firm. We bridge the gap between discerning global buyers and the city's finest architectural landmarks. Founded by Shaik Shareef.</p>
                <div className="contact-info">Hyderabad, Telangana, India.</div>
                <div className="contact-info"><a href="tel:+919391484751">+91 9391484751</a></div>
                <div className="contact-info"><a href="mailto:info@assetnest.in">info@assetnest.in</a></div>
            </div>

            <div className="footer-col" style={{ textAlign: 'center' }}>
                <h5>SOCIAL MEDIA</h5>
                <div className="social-icons">
                    <a href="https://www.instagram.com/assetnestrealtors/" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg></a>
                    <a href="https://in.linkedin.com/" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.02 2.02 0 1 0 5.25 7.04 2.02 2.02 0 0 0 5.25 3zM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.85V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.33-6.59z" /></svg></a>
                    <a href="https://www.youtube.com/" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.11 1.59.11 2.38 0 .79-.04 1.58-.11 2.38-.06.8-.15 1.43-.28 1.9-.32 1.19-1.24 2.11-2.43 2.43-.88.24-2.5.39-4.86.43-2.36.05-4.22.05-5.58 0-1.35-.04-2.97-.19-4.86-.43-1.19-.32-2.11-1.24-2.43-2.43C.72 15.39.63 14.76.57 13.96c-.07-.8-.11-1.59-.11-2.38 0-.79.04-1.58.11-2.38.06-.8.15-1.43.28-1.9.32-1.19 1.24-2.11 2.11-2.43 2.43z" /></svg></a>
                    <a href="https://wa.me/919391484751" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.5A10 10 0 1 0 12 2m0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3A8 8 0 1 1 12 20z" /></svg></a>
                </div>
            </div>

            <div className="footer-col">
                <h5>PRIME CORRIDORS</h5>
                <a href="#properties">Kokapet &amp; Gachibowli</a>
                <a href="#properties">HITEC City &amp; Financial District</a>
                <a href="#properties">Rajendra Nagar &amp; Tellapur</a>
                <a href="#properties">Kukatpally &amp; Gopanpally</a>
            </div>

            <div className="footer-col">
                <h5>QUICK LINKS</h5>
                <a href="#nri">NRI Investment Guide</a>
                <a href="#resale">List Your Property (Resale)</a>
                <a href="#properties">Verified Builder Partners</a>
                <a href="#contact">Privacy Policy &amp; Terms</a>
                <p>AssetNest Realtors is an authorized channel partner for TS-RERA registered projects.</p>
            </div>
        </footer>
    );
};

export default Footer;
