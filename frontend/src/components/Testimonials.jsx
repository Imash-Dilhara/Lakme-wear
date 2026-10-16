import './Testimonials.css';
import { useState, useEffect } from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Amaya Perera',
    role: 'Fashion Blogger',
    text: 'LAKME has completely transformed my wardrobe. The Ivory Silk Gown is the most exquisite piece I own — every detail speaks of unparalleled craftsmanship.',
    rating: 5,
    initial: 'A',
  },
  {
    id: 2,
    name: 'Dilini Fernando',
    role: 'Corporate Executive',
    text: 'The Cream Blazer Set is my go-to for important meetings. The fit is impeccable and I receive compliments every single time. LAKME truly understands modern luxury.',
    rating: 5,
    initial: 'D',
  },
  {
    id: 3,
    name: 'Sithara Jayawardena',
    role: 'Architect',
    text: 'I wore the Midnight Gown to a gala last month and felt like royalty. The quality is extraordinary — worth every rupee. LAKME is in a class of its own.',
    rating: 5,
    initial: 'S',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" aria-label="Customer reviews">
      <div className="testimonials__bg" aria-hidden="true" />
      <div className="container testimonials__inner">
        <div className="testimonials__header">
          <p className="section-subheading">Client Love</p>
          <h2 className="section-heading">What They Say</h2>
          <span className="gold-line" style={{ margin: '1rem 0' }} />
        </div>

        <div className="testimonials__slider" role="region" aria-live="polite">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className={`testimonial-card ${i === active ? 'testimonial-card--active' : ''}`}
              aria-hidden={i !== active}
            >
              <div className="testimonial-card__stars" aria-label={`${review.rating} stars`}>
                {Array.from({ length: review.rating }).map((_, si) => (
                  <StarIcon key={si} />
                ))}
              </div>
              <blockquote className="testimonial-card__text">
                "{review.text}"
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {review.initial}
                </div>
                <div>
                  <p className="testimonial-card__name">{review.name}</p>
                  <p className="testimonial-card__role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="testimonials__dots" role="tablist" aria-label="Review navigation">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i + 1}`}
              role="tab"
              aria-selected={i === active}
              aria-label={`Review ${i + 1}`}
              className={`testimonials__dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
