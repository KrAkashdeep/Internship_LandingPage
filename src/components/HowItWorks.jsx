import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Profile',
      description: 'Sign up and build your profile highlighting your skills, education, and experience',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Discover Opportunities',
      description: 'Browse through our curated list of internships that match your interests and skills',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Apply with Ease',
      description: 'Submit your application with just a few clicks and track your application status',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Get Hired',
      description: 'Receive offers, accept your dream internship, and kickstart your career journey',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-200">
            Your journey to landing the perfect internship in four simple steps
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-blue-200">{step.description}</p>
                  </div>
                </div>
                {step.id !== steps.length && (
                  <div className="hidden lg:block absolute top-8 left-full w-12 h-1 bg-purple-400 transform -translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition duration-150 ease-in-out">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;