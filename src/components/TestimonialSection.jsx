import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "InternHub helped me land my dream internship at Google. The platform is incredibly user-friendly, and the team provided valuable guidance throughout the application process.",
    author: "Sarah Johnson",
    role: "Computer Science Student",
    university: "Stanford University",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "As a business student, I was looking for an internship that would give me real-world experience. Thanks to InternHub, I found a marketing internship that perfectly matched my skills and interests.",
    author: "Michael Chen",
    role: "Business Administration Student",
    university: "NYU Stern",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    content: "The quality of internships on InternHub is unmatched. I was able to secure a position at a top financial firm, which has now turned into a full-time job offer after graduation!",
    author: "Emma Rodriguez",
    role: "Finance Major",
    university: "University of Chicago",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    content: "What sets InternHub apart is their personalized approach. They don't just connect you with companies; they ensure the opportunities align with your career goals and aspirations.",
    author: "David Kim",
    role: "Engineering Student",
    university: "MIT",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    content: "I was struggling to find design internships until I discovered InternHub. Within two weeks, I had multiple interviews lined up and eventually accepted an amazing UX design role.",
    author: "Olivia Taylor",
    role: "Graphic Design Student",
    university: "RISD",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Update within the file
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from students who found their perfect internships through our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 hidden md:block">
                <img 
                  className="h-full w-48 object-cover" 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4 md:hidden">
                  <img 
                    className="h-12 w-12 rounded-full mr-4" 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                  />
                  <div>
                    <div className="text-lg font-medium text-gray-900">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-gray-500">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
                <div className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-indigo-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative mt-4 text-xl text-gray-600 italic">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
                <div className="mt-6 md:flex md:items-center md:justify-between">
                  <div className="md:flex md:items-center hidden md:block">
                    <div className="text-lg font-medium text-gray-900">{testimonials[activeIndex].author}</div>
                    <div className="ml-2 text-sm text-gray-500">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].university}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-sm text-gray-500 md:hidden">
                    {testimonials[activeIndex].university}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center space-x-3">
            <button
              onClick={prevTestimonial}
              className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 text-center md:text-left">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Ready to find your perfect internship?
                </h3>
                <p className="mt-4 text-lg text-indigo-100">
                  Join thousands of students who have launched their careers through InternHub.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/3 md:flex md:justify-end">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;