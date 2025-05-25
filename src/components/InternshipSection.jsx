import React from 'react';
import { useNavigate } from 'react-router-dom';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'Remote',
    duration: '3 months',
    stipend: '$1000/month',
    skills: ['React', 'JavaScript', 'CSS'],
    description: 'Join our team to build responsive and user-friendly web applications using React and modern JavaScript.',
    logo: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'AnalyticsPro',
    location: 'New York, NY',
    duration: '6 months',
    stipend: '$1200/month',
    skills: ['Python', 'Machine Learning', 'SQL'],
    description: 'Work on real-world data science projects and help us extract insights from complex datasets.',
    logo: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    title: 'UI/UX Design Intern',
    company: 'DesignHub',
    location: 'San Francisco, CA',
    duration: '4 months',
    stipend: '$900/month',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    description: 'Create beautiful and intuitive user interfaces for our digital products and collaborate with our design team.',
    logo: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    title: 'Backend Developer Intern',
    company: 'ServerStack',
    location: 'Remote',
    duration: '3 months',
    stipend: '$1100/month',
    skills: ['Node.js', 'Express', 'MongoDB'],
    description: 'Develop robust backend services and APIs for our growing platform using modern technologies.',
    logo: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    title: 'Marketing Intern',
    company: 'GrowthGenius',
    location: 'Chicago, IL',
    duration: '3 months',
    stipend: '$800/month',
    skills: ['Social Media', 'Content Creation', 'Analytics'],
    description: 'Help us grow our brand presence through creative marketing campaigns and data-driven strategies.',
    logo: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 6,
    title: 'Mobile App Developer Intern',
    company: 'AppWorks',
    location: 'Austin, TX',
    duration: '4 months',
    stipend: '$1200/month',
    skills: ['React Native', 'Flutter', 'Mobile UI'],
    description: 'Build cross-platform mobile applications that deliver exceptional user experiences.',
    logo: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-sky-200">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img className="h-12 w-12 rounded-full mr-4 ring-2 ring-sky-100 object-cover" src={internship.logo} alt={internship.company} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
            <p className="text-sm text-gray-600">{internship.company}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="h-4 w-4 mr-1 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {internship.location}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="h-4 w-4 mr-1 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {internship.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-1 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {internship.stipend}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{internship.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {internship.skills.map((skill, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
              {skill}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out border border-sky-200 hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
          View Details
        </button>
      </div>
    </div>
  );
};

const InternshipSection = () => {
  const navigate = useNavigate();
  
  const handleBrowseMore = () => {
    navigate('/browse-internships');
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Internships
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover opportunities from top companies across various industries
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internships.slice(0, 6).map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleBrowseMore}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200"
          >
            Browse More Internships
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;