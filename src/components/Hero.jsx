import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    navigate('/browse-internships');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-indigo-800">
      <div className="absolute inset-0">
        <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="rgba(255, 255, 255, 0.15)" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
        <svg className="absolute right-full bottom-0 transform translate-x-1/4 md:translate-y-1/2 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="rgba(255, 255, 255, 0.15)" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares-2)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Launch Your Career</span>
              <span className="block text-purple-200">With Premium Internships</span>
            </h1>
            <p className="mt-3 text-base text-purple-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Find the perfect internship to kickstart your career. Thousands of opportunities from top companies waiting for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBrowseClick}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 shadow-md transition duration-150 ease-in-out"
              >
                Browse Internships
              </button>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-800 transition duration-150 ease-in-out"
              >
                For Employers
              </a>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2 mr-4">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/14.jpg" alt="" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/16.jpg" alt="" />
              </div>
              <span className="text-sm text-indigo-100">Join 10,000+ students who found their dream internships</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-purple-500 rounded-lg blur opacity-75"></div>
              <img
                className="relative h-auto w-full object-cover rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 bg-gray-50 h-32 -mb-16 transform skew-y-3"></div>
    </div>
  );
};

export default Hero;