import React, { useState, useEffect } from 'react';

const BrowseInternship = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedInternships, setDisplayedInternships] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    category: null,
    city: null,
    state: null,
    qualification: null
  });
  
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

  // Add this at the beginning of your component to ensure the page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize displayed internships with recent ones
  useEffect(() => {
    // Filter to show only recent internships by default
    setDisplayedInternships(featuredInternships.filter(internship => internship.recent));
  }, []);

  // Add this at the beginning of your component to ensure the animation works
  useEffect(() => {
    // Add the animation class to the stylesheet if it doesn't exist
    if (!document.querySelector('#dropdown-animation')) {
      const style = document.createElement('style');
      style.id = 'dropdown-animation';
      style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Enhanced FilterNavItem component with hover dropdown functionality
  // FilterNavItem component update
  const FilterNavItem = ({ title, items, itemType }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className="relative filter-dropdown"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          className={`px-5 py-3 font-medium focus:outline-none transition-colors duration-200 flex items-center ${
            selectedFilters[itemType] ? 'text-sky-700' : 'text-gray-700 hover:text-sky-700'
          }`}
          aria-expanded={isHovered}
          aria-haspopup="true"
        >
          <span>Search by {title}</span>
          <svg 
            className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'transform rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isHovered && (
          <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl z-[9999] p-3 border border-gray-100 animate-fadeIn">
            <div className="py-1 max-h-80 overflow-y-auto">
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => {
                      filterInternships(item.id, itemType);
                      setSelectedFilters(prev => ({ ...prev, [itemType]: item.id }));
                      setIsHovered(false);
                    }}
                    className={`flex items-center w-full px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                      selectedFilters[itemType] === item.id 
                        ? 'bg-sky-100 text-sky-800' 
                        : 'text-gray-700 hover:bg-sky-50 hover:text-sky-700'
                    }`}
                    style={{
                      animationDelay: `${index * 30}ms`,
                      opacity: 0,
                      animation: 'fadeIn 0.3s ease-out forwards'
                    }}
                  >
                    <div className="w-9 h-9 mr-3 flex-shrink-0 bg-sky-50 rounded-full p-1.5 flex items-center justify-center">
                      {item.icon ? (
                        <img 
                          src={item.icon} 
                          alt={item.name || ''} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTQgOGE0IDQgMCAxMTggMCA0IDQgMCAwMS04IDB6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sky-500">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">No items available</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Update the animation style to include staggered animations
  useEffect(() => {
    if (!document.querySelector('#dropdown-animation')) {
      const style = document.createElement('style');
      style.id = 'dropdown-animation';
      style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .filter-dropdown:hover .dropdown-item {
          animation: scaleIn 0.2s ease-out forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Remove duplicate click outside handlers and keep only one
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.filter-dropdown')) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

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
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 hover:scale-102 transition-transform duration-300">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img className="h-14 w-14 rounded-full mr-4 ring-2 ring-purple-200 object-cover shadow-sm" src={internship.logo} alt={internship.company} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-sky-700 transition-colors duration-200">{internship.title}</h3>
              <p className="text-sm text-gray-600">{internship.company}</p>
            </div>
          </div>
          <div className="mb-4 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg className="h-4 w-4 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {internship.location}
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg className="h-4 w-4 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {internship.duration}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg className="h-4 w-4 mr-2 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-sky-700">{internship.stipend}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{internship.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {internship.skills.map((skill, index) => (
              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 border border-sky-200">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-sky-600 to-sky-800 hover:from-sky-700 hover:to-sky-900 text-white font-medium py-2.5 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg">
              Apply Now
            </button>
            <button className="flex-none w-11 h-11 flex items-center justify-center border border-sky-300 text-sky-700 hover:bg-sky-50 rounded-lg transition duration-150 ease-in-out">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Add this useEffect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.relative')) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with search bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
              Browse Internships
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Find the perfect opportunity that matches your skills
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search internships..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full md:w-72 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm"
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-10 overflow-hidden">
          <div className="flex flex-wrap justify-between px-2 py-1">
            <FilterNavItem title="Categories" items={categories} itemType="category" />
            <FilterNavItem title="Cities" items={cities} itemType="city" />
            <FilterNavItem title="States" items={states} itemType="state" />
            <FilterNavItem title="Qualification" items={qualifications} itemType="qualification" />
          </div>
        </div>

        {/* Active Filter Indicator */}
        {activeFilter && (
          <div className="mb-8 flex items-center bg-sky-50 p-3 rounded-lg border border-sky-100 shadow-sm">
            <span className="text-gray-600 mr-2">Filtered by:</span>
            <span className="bg-white text-sky-800 px-4 py-1.5 rounded-full text-sm font-medium flex items-center shadow-sm border border-sky-200">
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
                className="ml-2 text-sky-600 hover:text-sky-800 focus:outline-none"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        )}

        {/* Displayed Internships */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            {activeFilter ? 'Matching Internships' : 'Recently Added Internships'}
            {!activeFilter && (
              <span className="ml-3 bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">New</span>
            )}
          </h2>
          
          {displayedInternships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedInternships.map(internship => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
              <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No internships found</h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">We couldn't find any internships matching your criteria. Try adjusting your search or filter options.</p>
              <button 
                onClick={() => {
                  setActiveFilter(null);
                  setFilterType(null);
                  setSearchQuery('');
                  setDisplayedInternships(featuredInternships.filter(internship => internship.recent));
                }}
                className="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
        
        {/* Pagination - Optional */}
        {displayedInternships.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-sky-600 border border-sky-600">
                1
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                3
              </button>
              <span className="px-3 py-2 text-gray-500">...</span>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                8
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseInternship;