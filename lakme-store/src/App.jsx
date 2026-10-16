import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import FeaturedProducts from './components/FeaturedProducts';
import Collection   from './components/Collection';
import Testimonials from './components/Testimonials';
import Newsletter   from './components/Newsletter';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeaturedProducts />
        <Collection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
