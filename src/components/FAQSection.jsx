import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`h-6 w-6 text-indigo-500 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of internships are available?",
      answer: "We offer a wide range of internships across various industries including technology, marketing, finance, design, and more. Our platform features both remote and in-person opportunities with flexible durations to fit your schedule."
    },
    {
      question: "Are these internships paid?",
      answer: "Yes, most internships on our platform offer stipends or hourly compensation. The payment details are clearly mentioned in each internship listing, allowing you to filter based on your compensation requirements."
    },
    {
      question: "How do I increase my chances of getting selected?",
      answer: "Complete your profile with relevant skills, education, and projects. Tailor your application to each internship, highlighting relevant experience. We also recommend adding a portfolio of your work and keeping your resume updated."
    },
    {
      question: "Can international students apply?",
      answer: "Yes, many of our internships are open to international students. Each listing specifies eligibility requirements, including visa status if applicable. We also have a dedicated section for remote internships that are available globally."
    },
    {
      question: "How long does the application process take?",
      answer: "The timeline varies by company, but most employers review applications within 1-2 weeks. You can track your application status in real-time through your dashboard and will receive notifications when there are updates."
    },
    {
      question: "Is there any support during the internship?",
      answer: "Absolutely! We provide mentorship opportunities, regular check-ins, and a community forum where you can connect with other interns. Our career advisors are also available to help you navigate any challenges during your internship."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about our internship platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;