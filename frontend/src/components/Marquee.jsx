import './Marquee.css';

const BRANDS = [
  'Handcrafted', '·', 'Sustainable', '·', 'Premium Quality',
  '·', 'Islandwide Delivery', '·', 'Made to Order', '·', 'Exclusive Designs',
  '·', 'Handcrafted', '·', 'Sustainable', '·', 'Premium Quality',
  '·', 'Islandwide Delivery', '·', 'Made to Order', '·', 'Exclusive Designs',
];

export default function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-inner">
          {BRANDS.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
