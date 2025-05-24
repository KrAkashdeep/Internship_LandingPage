import React, { useState, useEffect } from 'react';

const BrowseInternship = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedInternships, setDisplayedInternships] = useState([]);
  const [hoveredSection, setHoveredSection] = useState(null);
  
  // Categories data from the image
  const categories = [
    {
      id: 1,
      name: 'Engineering',
      icon: '/icons/engineering.png',
      alt: 'Engineering icon with pencil and wrench',
      internships: [
        {
          id: 101,
          title: 'Mechanical Engineering Intern',
          company: 'AutoTech Industries',
          location: 'Detroit, MI',
          duration: '6 months',
          stipend: '$1200/month',
          skills: ['CAD', 'Mechanical Design', 'MATLAB'],
          description: 'Work on designing automotive components and systems using CAD software.',
          logo: 'https://randomuser.me/api/portraits/men/11.jpg'
        },
        {
          id: 102,
          title: 'Electrical Engineering Intern',
          company: 'PowerGrid Solutions',
          location: 'Boston, MA',
          duration: '4 months',
          stipend: '$1100/month',
          skills: ['Circuit Design', 'PCB Layout', 'Arduino'],
          description: 'Assist in designing and testing electrical systems for renewable energy applications.',
          logo: 'https://randomuser.me/api/portraits/women/12.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Marketing',
      icon: '/icons/marketing.png',
      alt: 'Marketing icon with person in center of network',
      internships: [
        {
          id: 201,
          title: 'Digital Marketing Intern',
          company: 'BrandBoost',
          location: 'Remote',
          duration: '3 months',
          stipend: '$900/month',
          skills: ['SEO', 'Social Media', 'Content Creation'],
          description: 'Help develop and implement digital marketing strategies to increase brand awareness.',
          logo: 'https://randomuser.me/api/portraits/women/21.jpg'
        },
        {
          id: 202,
          title: 'Market Research Intern',
          company: 'InsightAnalytics',
          location: 'Chicago, IL',
          duration: '4 months',
          stipend: '$950/month',
          skills: ['Data Analysis', 'Survey Design', 'Market Trends'],
          description: 'Conduct market research and analyze consumer behavior to inform marketing strategies.',
          logo: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'Software Development',
      icon: '/icons/software.png',
      alt: 'Software Development icon with code window and diamond',
      internships: [
        {
          id: 301,
          title: 'Full Stack Developer Intern',
          company: 'WebSolutions',
          location: 'Remote',
          duration: '6 months',
          stipend: '$1300/month',
          skills: ['React', 'Node.js', 'MongoDB'],
          description: 'Develop and maintain web applications using modern JavaScript frameworks.',
          logo: 'https://randomuser.me/api/portraits/men/31.jpg'
        },
        {
          id: 302,
          title: 'Mobile App Developer Intern',
          company: 'AppInnovate',
          location: 'San Francisco, CA',
          duration: '4 months',
          stipend: '$1250/month',
          skills: ['React Native', 'iOS', 'Android'],
          description: 'Build cross-platform mobile applications with React Native for iOS and Android.',
          logo: 'https://randomuser.me/api/portraits/women/32.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'Human Resources',
      icon: '/icons/hr.png',
      alt: 'Human Resources icon with people in meeting',
      internships: [
        {
          id: 401,
          title: 'HR Operations Intern',
          company: 'TalentForce',
          location: 'New York, NY',
          duration: '3 months',
          stipend: '$850/month',
          skills: ['Recruitment', 'HRIS', 'Employee Relations'],
          description: 'Assist in day-to-day HR operations and recruitment processes.',
          logo: 'https://randomuser.me/api/portraits/women/41.jpg'
        },
        {
          id: 402,
          title: 'Talent Acquisition Intern',
          company: 'HireRight',
          location: 'Remote',
          duration: '4 months',
          stipend: '$900/month',
          skills: ['Sourcing', 'Interviewing', 'ATS'],
          description: 'Support the recruitment team in sourcing and screening candidates.',
          logo: 'https://randomuser.me/api/portraits/men/42.jpg'
        }
      ]
    },
    {
      id: 5,
      name: 'Creative',
      icon: '/icons/creative.png',
      alt: 'Creative icon with puzzle pieces and lightbulb',
      internships: [
        {
          id: 501,
          title: 'Graphic Design Intern',
          company: 'VisualArts',
          location: 'Los Angeles, CA',
          duration: '3 months',
          stipend: '$950/month',
          skills: ['Adobe Creative Suite', 'Typography', 'Branding'],
          description: 'Create visual assets for digital and print media campaigns.',
          logo: 'https://randomuser.me/api/portraits/women/51.jpg'
        },
        {
          id: 502,
          title: 'Video Production Intern',
          company: 'MediaWorks',
          location: 'Austin, TX',
          duration: '4 months',
          stipend: '$1000/month',
          skills: ['Video Editing', 'After Effects', 'Storytelling'],
          description: 'Assist in producing and editing video content for various platforms.',
          logo: 'https://randomuser.me/api/portraits/men/52.jpg'
        }
      ]
    },
    {
      id: 6,
      name: 'Media',
      icon: '/icons/media.png',
      alt: 'Media icon with cursor clicking on screen',
      internships: [
        {
          id: 601,
          title: 'Social Media Intern',
          company: 'DigitalPulse',
          location: 'Remote',
          duration: '3 months',
          stipend: '$850/month',
          skills: ['Content Creation', 'Analytics', 'Community Management'],
          description: 'Manage social media accounts and create engaging content for various platforms.',
          logo: 'https://randomuser.me/api/portraits/women/61.jpg'
        },
        {
          id: 602,
          title: 'Content Writing Intern',
          company: 'WordCraft',
          location: 'Seattle, WA',
          duration: '4 months',
          stipend: '$900/month',
          skills: ['Copywriting', 'SEO', 'Research'],
          description: 'Create compelling written content for websites, blogs, and marketing materials.',
          logo: 'https://randomuser.me/api/portraits/men/62.jpg'
        }
      ]
    }
  ];

  // Cities data from the image
  const cities = [
    { id: 1, name: 'New Delhi', icon: '/icons/delhi.png' },
    { id: 2, name: 'Mumbai', icon: '/icons/mumbai.png' },
    { id: 3, name: 'Gurgaon', icon: '/icons/gurgaon.png' },
    { id: 4, name: 'Pune', icon: '/icons/pune.png' },
    { id: 5, name: 'Indore', icon: '/icons/indore.png' },
    { id: 6, name: 'Bangalore', icon: '/icons/bangalore.png' }
  ];

  // States data from the image
  const states = [
    { id: 1, name: 'Karnataka', icon: '/icons/karnataka.png' },
    { id: 2, name: 'Tamil Nadu', icon: '/icons/tamilnadu.png' },
    { id: 3, name: 'Maharashtra', icon: '/icons/maharashtra.png' },
    { id: 4, name: 'Madhya Pradesh', icon: '/icons/mp.png' },
    { id: 5, name: 'Haryana', icon: '/icons/haryana.png' }
  ];

  // Qualifications data from the image
  const qualifications = [
    { id: 1, name: 'Bachelor of Technology (B.Tech) in Computers', icon: '/icons/btech.png' },
    { id: 2, name: 'Bachelor of Commerce (B.Com) in Commerce', icon: '/icons/bcom.png' },
    { id: 3, name: 'Bachelor of Computer Applications (BCA) in Computer', icon: '/icons/bca.png' },
    { id: 4, name: 'Bachelor of Technology (B.Tech) in IT-Software', icon: '/icons/btech-it.png' }
  ];

  // Featured/Recent internships to show by default
  const featuredInternships = [
    {
      id: 701,
      title: 'Data Science Intern',
      company: 'DataMinds',
      location: 'Remote',
      duration: '6 months',
      stipend: '$1400/month',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Work on real-world data science projects using machine learning algorithms.',
      logo: 'https://randomuser.me/api/portraits/men/71.jpg',
      featured: true
    },
    {
      id: 702,
      title: 'UX/UI Design Intern',
      company: 'DesignLab',
      location: 'San Francisco, CA',
      duration: '4 months',
      stipend: '$1200/month',
      skills: ['Figma', 'User Research', 'Prototyping'],
      description: 'Design intuitive user interfaces and improve user experiences for digital products.',
      logo: 'https://randomuser.me/api/portraits/women/72.jpg',
      featured: true
    },
    {
      id: 703,
      title: 'Business Development Intern',
      company: 'GrowthPartners',
      location: 'New York, NY',
      duration: '3 months',
      stipend: '$1000/month',
      skills: ['Sales', 'Market Research', 'CRM'],
      description: 'Help identify new business opportunities and develop strategies for growth.',
      logo: 'https://randomuser.me/api/portraits/men/73.jpg',
      recent: true
    },
    {
      id: 704,
      title: 'Content Marketing Intern',
      company: 'ContentHub',
      location: 'Remote',
      duration: '4 months',
      stipend: '$950/month',
      skills: ['Content Creation', 'SEO', 'Social Media'],
      description: 'Create engaging content for various digital platforms to drive traffic and engagement.',
      logo: 'https://randomuser.me/api/portraits/women/74.jpg',
      recent: true
    },
    {
      id: 705,
      title: 'Frontend Developer Intern',
      company: 'WebCraft',
      location: 'Austin, TX',
      duration: '6 months',
      stipend: '$1300/month',
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'Build responsive and interactive user interfaces using modern frontend technologies.',
      logo: 'https://randomuser.me/api/portraits/men/75.jpg',
      featured: true
    },
    {
      id: 706,
      title: 'Product Management Intern',
      company: 'ProductLabs',
      location: 'Seattle, WA',
      duration: '4 months',
      stipend: '$1200/month',
      skills: ['Product Strategy', 'User Stories', 'Agile'],
      description: 'Assist in product development lifecycle from ideation to launch.',
      logo: 'https://randomuser.me/api/portraits/women/76.jpg',
      recent: true
    }
  ];

  // Initialize displayed internships with recent ones
  useEffect(() => {
    // Filter to show only recent internships by default
    setDisplayedInternships(featuredInternships.filter(internship => internship.recent));
  }, []);

  // Filter internships based on selected filter
  const filterInternships = (filterId, type) => {
    setActiveFilter(filterId);
    setFilterType(type);
    
    let filtered = [];
    
    switch(type) {
      case 'category':
        const category = categories.find(cat => cat.id === filterId);
        filtered = category ? category.internships : [];
        break;
      case 'city':
        filtered = featuredInternships.filter(internship => 
          internship.location.includes(cities.find(city => city.id === filterId)?.name || '')
        );
        break;
      case 'state':
        filtered = featuredInternships.filter(internship => 
          internship.location.includes(states.find(state => state.id === filterId)?.name || '')
        );
        break;
      case 'qualification':
        filtered = featuredInternships.filter(internship => 
          internship.requiredQualification === qualifications.find(qual => qual.id === filterId)?.name
        );
        break;
      default:
        filtered = featuredInternships.filter(internship => internship.recent);
    }
    
    setDisplayedInternships(filtered);
  };

  // Search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      // If search is cleared, show recent internships
      setDisplayedInternships(featuredInternships.filter(internship => internship.recent));
      return;
    }
    
    // Search across all internships
    const allInternships = [
      ...featuredInternships,
      ...categories.flatMap(category => category.internships || [])
    ];
    
    const searchResults = allInternships.filter(
      internship => 
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query) ||
        internship.description.toLowerCase().includes(query) ||
        (internship.skills && internship.skills.some(skill => skill.toLowerCase().includes(query)))
    );
    
    setDisplayedInternships(searchResults);
  };

  // InternshipCard component (reused from InternshipSection)
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

  // Category item with dropdown
  const CategoryItem = ({ category }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    
    return (
      <div 
        className="flex flex-col items-center relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div 
          className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setActiveCategory(category.id)}
        >
          <img src={category.icon} alt={category.alt} className="w-12 h-12 mb-2" />
          <span className="text-xs text-center font-medium">{category.name}</span>
        </div>
        
        {showDropdown && category.internships && category.internships.length > 0 && (
          <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-xl z-10 p-2">
            <div className="py-1">
              {category.internships.map(internship => (
                <a 
                  key={internship.id}
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
                >
                  {internship.title} - {internship.company}
                </a>
              ))}
              <div className="border-t border-gray-100 my-1"></div>
              <a 
                href="#" 
                className="block px-4 py-2 text-sm text-purple-700 font-medium hover:bg-purple-50 rounded-md"
              >
                View all {category.name} internships
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Filter section component
  const FilterSection = ({ title, items, itemType }) => {
    const [showAll, setShowAll] = useState(false);
    
    return (
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Search by {title}</h2>
          <a href="#" className="text-purple-700 hover:text-purple-800 flex items-center text-sm font-medium">
            See all
            <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map(item => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-2">
                <img src={item.icon} alt={item.name} className="max-w-full max-h-full" />
              </div>
              <span className="text-xs text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // New FilterNavItem component for the navigation bar
  const FilterNavItem = ({ title, items, itemType }) => {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setHoveredSection(itemType)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <button className="px-4 py-2 text-gray-700 font-medium hover:text-purple-700 focus:outline-none">
          Search by {title}
        </button>
        
        {hoveredSection === itemType && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl z-20 p-2">
            <div className="py-1 max-h-80 overflow-y-auto">
              {items.map(item => (
                <button 
                  key={item.id}
                  onClick={() => filterInternships(item.id, itemType)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md"
                >
                  <div className="w-8 h-8 mr-2 flex-shrink-0">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with search bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Browse Internships
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search internships..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <svg 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Navigation Bar (replacing navbar) */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap justify-between px-4 py-3">
            <FilterNavItem title="Categories" items={categories} itemType="category" />
            <FilterNavItem title="Cities" items={cities} itemType="city" />
            <FilterNavItem title="States" items={states} itemType="state" />
            <FilterNavItem title="Qualification" items={qualifications} itemType="qualification" />
          </div>
        </div>

        {/* Active Filter Indicator */}
        {activeFilter && (
          <div className="mb-6 flex items-center">
            <span className="text-gray-600 mr-2">Filtered by:</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              {filterType === 'category' && categories.find(cat => cat.id === activeFilter)?.name}
              {filterType === 'city' && cities.find(city => city.id === activeFilter)?.name}
              {filterType === 'state' && states.find(state => state.id === activeFilter)?.name}
              {filterType === 'qualification' && qualifications.find(qual => qual.id === activeFilter)?.name}
              <button 
                onClick={() => {
                  setActiveFilter(null);
                  setFilterType(null);
                  setDisplayedInternships(featuredInternships.filter(internship => internship.recent));
                }}
                className="ml-2 text-purple-600 hover:text-purple-800 focus:outline-none"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        )}

        {/* Rest of the content remains the same */}
        <div className="text-center mb-12">
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find the perfect internship opportunity that matches your skills and interests
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          {/* ... existing Categories Section ... */}
        </div>

        {/* Cities Section */}
        <FilterSection title="Cities" items={cities} itemType="city" />

        {/* States Section */}
        <FilterSection title="States" items={states} itemType="state" />

        {/* Qualifications Section */}
        <FilterSection title="Qualification" items={qualifications} itemType="qualification" />

        {/* Featured and Recent Internships */}
        <div className="mt-16">
          {/* ... existing Featured and Recent Internships sections ... */}
        </div>
      </div>
    </section>
  );
};

export default BrowseInternship;