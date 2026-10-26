import { useState , useEffect } from 'react';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import FeaturedProducts from './components/FeaturedProducts';
import Collection   from './components/Collection';
import Testimonials from './components/Testimonials';
import Newsletter   from './components/Newsletter';
import Footer       from './components/Footer';
import AdminPanel_login from './components/AdminPanel_login';

export default function App() {
  const [pathname , setPathname] = useState('/');

  useEffect(() => {
    setPathname(window.location.pathname);
  },[]);

  //remove this
  console.log('Path name : ' , pathname);

  if(pathname === '/admin'){
    return <AdminPanel_login/>;
  }

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
