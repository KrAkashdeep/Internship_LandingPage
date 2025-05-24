import React from 'react';

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

// Update the InternshipCard component within the file
const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img className="h-12 w-12 rounded-full mr-4 ring-2 ring-purple-100" src={internship.logo} alt={internship.company} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
            <p className="text-sm text-gray-600">{internship.company}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {internship.location}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {internship.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {internship.stipend}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{internship.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {internship.skills.map((skill, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out">
            Apply Now
          </button>
          <button className="flex-none w-10 h-10 flex items-center justify-center border border-purple-700 text-purple-700 hover:bg-purple-50 rounded transition duration-150 ease-in-out">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const InternshipSection = () => {
  return (
    <section id="internships" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Internships
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover opportunities that match your skills and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Internships
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;