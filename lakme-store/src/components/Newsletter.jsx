import './Newsletter.css';
import { useState } from 'react';

export default function Newsletter() {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="newsletter" id="contact" aria-label="Newsletter signup">
      <div className="newsletter__bg" aria-hidden="true" />
      <div className="container newsletter__inner">
        <div className="newsletter__content">
          <p className="section-subheading newsletter__eyebrow">Stay in the Know</p>
          <h2 className="newsletter__title">
            The World of<br /><em>LAKME</em>, Delivered.
          </h2>
          <p className="newsletter__desc">
            Subscribe to receive early access to new collections,<br />
            exclusive offers, and curated style inspiration.
          </p>

          {submitted ? (
            <div className="newsletter__success" role="status">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p>Thank you for subscribing to LAKME.</p>
            </div>
          ) : (
            <form
              id="newsletter-form"
              className="newsletter__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="newsletter__input-wrap">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="Your email address"
                  className={`newsletter__input ${error ? 'newsletter__input--error' : ''}`}
                  aria-label="Email address"
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  required
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="btn btn--filled newsletter__submit"
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <p id="newsletter-error" className="newsletter__error" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}

          <p className="newsletter__note">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
