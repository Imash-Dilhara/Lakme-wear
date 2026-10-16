import './Hero.css';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('hero__content--visible'), 100);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero banner">
      {/* Background gradient */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-shape hero__bg-shape--1" />
        <div className="hero__bg-shape hero__bg-shape--2" />
        <div className="hero__bg-shape hero__bg-shape--3" />
      </div>

      {/* Decorative lines */}
      <div className="hero__deco hero__deco--left"  aria-hidden="true" />
      <div className="hero__deco hero__deco--right" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left text */}
        <div className="hero__content" ref={textRef}>
          <p className="section-subheading hero__eyebrow">New Collection 2025</p>
          <h1 className="hero__title">
            Wear the<br />
            <em>Elegance</em><br />
            You Deserve
          </h1>
          <p className="hero__description">
            Timeless silhouettes crafted from the world's finest fabrics.
            Each piece is a celebration of refined femininity.
          </p>
          <div className="hero__actions">
            <a href="#products" id="hero-shop-btn" className="btn btn--filled">
              Shop Collection
            </a>
            <a href="#about" id="hero-about-btn" className="btn">
              Our Story
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Exclusive Designs</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">12</span>
              <span className="hero__stat-label">Collections</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">50k+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero__visual">
          <div className="hero__image-frame">
            <div className="hero__image-inner">
              {/* Gradient art panel instead of real image */}
              <div className="hero__art-panel" aria-hidden="true">
                <div className="hero__art-overlay" />
                <span className="hero__art-label">LAKME</span>
              </div>
            </div>
            <div className="hero__frame-deco hero__frame-deco--tl" />
            <div className="hero__frame-deco hero__frame-deco--br" />
          </div>

          {/* Floating badge */}
          <div className="hero__badge" aria-label="New arrival">
            <span className="hero__badge-line">New</span>
            <span className="hero__badge-main">Arrival</span>
            <span className="hero__badge-season">SS 2025</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
