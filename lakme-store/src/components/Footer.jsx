import './Footer.css';

const LINKS = {
  Shop:    ['New Arrivals', 'Evening Wear', 'Day Wear', 'Office Couture', 'Sale'],
  Company: ['Our Story', 'Sustainability', 'Careers', 'Press'],
  Help:    ['FAQs', 'Size Guide', 'Returns', 'Track Order'],
};

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'Facebook',  href: '#', icon: <FacebookIcon />  },
  { label: 'Pinterest', href: '#', icon: <PinterestIcon /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="about" role="contentinfo">
      <div className="footer__top container">
        {/* Brand column */}
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="LAKME home">
            <span className="footer__logo-text">LAKME</span>
            <span className="footer__logo-sub">Luxury Fashion</span>
          </a>
          <p className="footer__tagline">
            Crafting timeless elegance for the modern woman since 2018.
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
              <span>42 Galle Road, Colombo 03</span>
            </li>
            <li>
              <span className="footer__contact-label">Email</span>
              <a href="mailto:hello@lakme.lk" className="footer__nav-link">hello@lakme.lk</a>
            </li>
            <li>
              <span className="footer__contact-label">Phone</span>
              <a href="tel:+94112345678" className="footer__nav-link">+94 11 234 5678</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} LAKME Luxury Fashion. All rights reserved.
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

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.136-1.866 3.136-4.56 0-2.384-1.714-4.052-4.16-4.052-2.833 0-4.497 2.124-4.497 4.32 0 .856.33 1.772.741 2.273" />
    </svg>
  );
}
