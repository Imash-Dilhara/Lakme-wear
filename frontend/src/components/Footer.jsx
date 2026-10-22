import './Footer.css';

import logo from '../assets/logo-with-name.png';

const LINKS = {
  Shop:    ['New Arrivals', 'Evening Wear', 'Day Wear', 'Office Couture', 'Sale'],
  Company: ['Our Story', 'Sustainability', 'Careers', 'Press'],
  Help:    ['FAQs', 'Size Guide', 'Returns', 'Track Order'],
};

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'Facebook',  href: '#', icon: <FacebookIcon />  },
  { label: 'TikTok', href: '#', icon: <TikTokIcon /> },
  { label: 'Whatsapp', href: '#', icon: <WhatsAppIcon /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="about" role="contentinfo">
      <div className="footer__top container">
        {/* Brand column */}
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="LAKME home">
            <img src={logo} alt="Logo Image" />
            <div className='footer__logo-box'>
              <span className="footer__logo-text">LAKME</span>
              <span className="footer__logo-sub">Luxury Fashion</span>
            </div>
          </a>
          <p className="footer__tagline">
            Crafting timeless elegance for the modern woman since 2026.
          </p>
          <div className="footer__socials">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                id={`footer-${s.label.toLowerCase()}-link`}
                className="footer__social-link"
                aria-label={`Visit our ${s.label} page`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h3 className="footer__col-heading">{heading}</h3>
            <ul>
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    id={`footer-link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="footer__nav-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Contact</h3>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-label">Store</span>
              <span>Galle Road, Gintota, Galle</span>
            </li>
            <li>
              <span className="footer__contact-label">Email</span>
              <a href="mailto:hello@lakme.lk" className="footer__nav-link">Lakmewear@gmail.com</a>
            </li>
            <li>
              <span className="footer__contact-label">Phone</span>
              <a href="tel:+94770510090" className="footer__nav-link">+94 77 051 0090</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} LAKME Luxury Fashion. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" id="footer-privacy-link" className="footer__legal-link">Privacy Policy</a>
            <a href="#" id="footer-terms-link"   className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/*Chat Bubble*/}
      <path d="M22 11.5a9.5 9.5 0 0 1-1 4.3 9.6 9.6 0 0 1-8.6 5.3 9.5 9.5 0 0 1-4.3-1L2 22l1.9-6.4A9.5 9.5 0 0 1 3 11.2a9.6 9.6 0 0 1 5.3-8.6 9.5 9.5 0 0 1 4.3-1h.5a9.5 9.5 0 0 1 8.9 9v.9z" />
      
      {/*Phone Receiver*/}
      <path d="M15.5 12.2c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.6.3-.9.1a7 7 0 0 1-2.9-2.9c-.2-.3-.1-.7.1-.9l.6-.6c.2-.2.2-.5 0-.7l-.8-.8c-.2-.2-.5-.2-.7 0a2 2 0 0 0-.6 1.4c0 1.5.9 3.2 2.3 4.6 1.4 1.4 3.1 2.3 4.6 2.3a2 2 0 0 0 1.4-.6l.6-.6c.2-.2.2-.5 0-.7l-.9-.7z" />
    </svg>
  );
}
