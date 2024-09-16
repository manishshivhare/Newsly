import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    isVisible && (
      <button
        className="fixed bottom-5 right-5 bg-[#53c1c0] text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none dark:bg-blue-500"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
