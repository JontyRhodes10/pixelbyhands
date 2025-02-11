import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LogoBanner from '../components/LogoBanner';
import Solution from '../components/Solution';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import CaseStudy from '../components/CaseStudy';
import CallToAction from '../components/CallToAction';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <LogoBanner />
      <Solution />
      <Services />
      <FAQ />
      <CaseStudy />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;