import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import HowItWorks from './components/HowItWorks';
import InternshipSection from './components/InternshipSection';
import BrowseInternship from './components/BrowseInternship';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
// import LoginUI from './components/LoginUI';
import Footer from './components/Footer';

// Create a Home component that contains all the landing page sections
const Home = ({ onLoginClick }) => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <HowItWorks />
      <InternshipSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
};

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar onLoginClick={() => setShowLogin(true)} />
        
        <Routes>
          <Route path="/" element={<Home onLoginClick={() => setShowLogin(true)} />} />
          <Route path="/browse-internships" element={<BrowseInternship />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {showLogin && <LoginUI onClose={() => setShowLogin(false)} />}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
