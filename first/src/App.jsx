import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 50
    });
  }, []);

  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </>
  );
}

export default App;
