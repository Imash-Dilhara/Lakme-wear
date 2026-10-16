import './FeaturedProducts.css';
import { useState, useRef, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Ivory Silk Gown',
    category: 'Evening Wear',
    price: 24800,
    badge: 'New',
    gradient: 'linear-gradient(145deg, #f7f0e6 0%, #e8d9c0 50%, #d4bc95 100%)',
  },
  {
    id: 2,
    name: 'Cream Blazer Set',
    category: 'Office Couture',
    price: 18500,
    badge: 'Best Seller',
    gradient: 'linear-gradient(145deg, #f0ece2 0%, #ddd5c0 50%, #c4b898 100%)',
  },
  {
    id: 3,
    name: 'Midnight Gown',
    category: 'Evening Wear',
    price: 32000,
    badge: 'Limited',
    gradient: 'linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 50%, #0d0d0d 100%)',
  },
  {
    id: 4,
    name: 'Pearl Midi Dress',
    category: 'Day Wear',
    price: 16900,
    badge: null,
    gradient: 'linear-gradient(145deg, #faf5ec 0%, #ede3cc 50%, #daccb0 100%)',
  },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function FeaturedProducts() {
  const [wishlist,     setWishlist]     = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [quickView,    setQuickView]    = useState(null);
  const sectionRef = useRef(null);

  const filters = ['All', 'Evening Wear', 'Office Couture', 'Day Wear'];

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  /* Reveal on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section className="products" id="products" ref={sectionRef} aria-label="Featured products">
      <div className="container">
        {/* Heading */}
        <div className="products__header reveal">
          <p className="section-subheading">Curated For You</p>
          <h2 className="section-heading">Featured Pieces</h2>
          <span className="gold-line" />
        </div>

        {/* Filter bar */}
        <div className="products__filters reveal" role="group" aria-label="Filter products">
          {filters.map(f => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              className={`products__filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products__grid">
          {filtered.map((product, i) => (
            <article
              key={product.id}
              className="product-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={product.name}
            >
              {/* Image area */}
              <div className="product-card__image-wrap">
                <div
                  className="product-card__image"
                  style={{ background: product.gradient }}
                  aria-hidden="true"
                >
                  <span className="product-card__brand-mark">L</span>
                </div>

                {product.badge && (
                  <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                    {product.badge}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="product-card__overlay">
                  <button
                    id={`quick-view-${product.id}`}
                    className="product-card__quick-view"
                    onClick={() => setQuickView(product)}
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="product-card__info">
                <span className="product-card__category">{product.category}</span>
                <h3 className="product-card__name">{product.name}</h3>
                <div className="product-card__bottom">
                  <span className="product-card__price">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <div className="product-card__actions">
                    <button
                      id={`wishlist-${product.id}`}
                      className={`product-card__wish ${wishlist.includes(product.id) ? 'active' : ''}`}
                      aria-label={`${wishlist.includes(product.id) ? 'Remove from' : 'Add to'} wishlist`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <HeartIcon filled={wishlist.includes(product.id)} />
                    </button>
                    <button
                      id={`add-cart-${product.id}`}
                      className="product-card__cart-btn"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="products__footer reveal">
          <a href="#" id="view-all-btn" className="btn">
            View All Pieces
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick view modal */}
      {quickView && (
        <QuickViewModal
          product={quickView}
          onClose={() => setQuickView(null)}
        />
      )}
    </section>
  );
}

function QuickViewModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Quick view: ${product.name}`} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button id="modal-close-btn" className="modal__close" aria-label="Close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal__image" style={{ background: product.gradient }} aria-hidden="true">
          <span className="product-card__brand-mark">L</span>
        </div>

        <div className="modal__info">
          <p className="section-subheading">{product.category}</p>
          <h3 className="modal__name">{product.name}</h3>
          <p className="modal__price">Rs. {product.price.toLocaleString()}</p>

          <p className="modal__desc">
            A masterpiece of craftsmanship, this {product.name.toLowerCase()} is woven from the
            finest materials and designed to make every moment unforgettable.
          </p>

          <div className="modal__sizes">
            <p className="modal__sizes-label">Select Size</p>
            <div className="modal__sizes-grid">
              {SIZES.map(s => (
                <button
                  key={s}
                  id={`size-${s}-${product.id}`}
                  className={`modal__size-btn ${selectedSize === s ? 'active' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button id="modal-add-cart-btn" className="btn btn--filled modal__add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}
