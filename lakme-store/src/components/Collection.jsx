import './Collection.css';
import { useRef, useEffect } from 'react';

export default function Collection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="collection" id="collection" ref={sectionRef} aria-label="New collection">
      {/* Big editorial panel */}
      <div className="collection__panel">
        <div className="collection__panel-bg" aria-hidden="true">
          <div className="collection__panel-overlay" />
          {/* Typography watermark */}
          <span className="collection__watermark" aria-hidden="true">SS25</span>
        </div>
        <div className="collection__panel-content reveal">
          <p className="section-subheading collection__eyebrow">Spring / Summer 2025</p>
          <h2 className="collection__title">
            The New<br /><em>Luminance</em><br />Collection
          </h2>
          <p className="collection__desc">
            Inspired by the quiet luxury of Parisian mornings —<br />
            our newest collection celebrates light, movement, and timeless grace.
          </p>
          <a href="#products" id="collection-explore-btn" className="btn btn--gold collection__cta">
            Explore Now
          </a>
        </div>
      </div>

      {/* Three cards row */}
      <div className="container">
        <div className="collection__cards">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className="col-card reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
              aria-label={card.title}
            >
              <div className="col-card__image" style={{ background: card.gradient }} aria-hidden="true">
                <span className="col-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="col-card__body">
                <h3 className="col-card__title">{card.title}</h3>
                <p className="col-card__text">{card.text}</p>
                <a href="#products" id={`col-card-${i + 1}-btn`} className="col-card__link">
                  Shop Now
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const CARDS = [
  {
    title: 'Day Elegance',
    text: 'Elevated basics for effortless daytime sophistication.',
    gradient: 'linear-gradient(160deg, #f5f0e4 0%, #e0d5bd 100%)',
  },
  {
    title: 'Evening Opulence',
    text: 'Gowns crafted for moments that deserve to be remembered.',
    gradient: 'linear-gradient(160deg, #2a2420 0%, #1a1210 100%)',
  },
  {
    title: 'Resort Luxe',
    text: 'Sun-kissed styles for the discerning traveller.',
    gradient: 'linear-gradient(160deg, #f0e6d0 0%, #c8b48a 100%)',
  },
];
