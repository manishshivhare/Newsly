import React, { useRef, useState, useEffect } from "react";
import { newsCategories } from "../utils/Data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/UserSlicer/userSlice";

const CategoryBar = ({ onCategoryChange }) => {
  const categoryBarRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    if (isTimerActive) {
      setShowWarning(true);
      setLoading(true);
      setTimeout(() => {
        setShowWarning(false);
        setLoading(false);
      }, 5000); // Show warning for 5 seconds
      return;
    }

    dispatch(setCategory(category));
    if (onCategoryChange) onCategoryChange();

    // Activate timer
    setIsTimerActive(true);

    setTimeout(() => {
      setIsTimerActive(false);
    }, 60000); // 1 minute timer
  };

  const checkScrollPosition = () => {
    if (categoryBarRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryBarRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd =
        Math.round(scrollLeft + clientWidth) >= Math.round(scrollWidth);

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  };

  const scrollLeft = () => {
    if (categoryBarRef.current) {
      categoryBarRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoryBarRef.current) {
      categoryBarRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentElement = categoryBarRef.current;

    const handleScroll = () => {
      checkScrollPosition();
    };

    checkScrollPosition();

    if (currentElement) {
      currentElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 px-10 transition-all select-none sticky top-0 z-50 ">
      {canScrollLeft && (
        <div
          aria-label="Scroll left"
          className="absolute left-5 bg-white-to-transparent-r dark:bg-dark-to-transparent-r top-1/2 transform -translate-y-1/2 flex items-center w-20 h-8 cursor-pointer justify-start"
          onClick={scrollLeft}
        >
          <MdOutlineKeyboardArrowLeft className="w-7 h-7 rounded-full hover:bg-[#ededed] dark:hover:bg-gray-800" />
        </div>
      )}

      <ul
        className="flex gap-5 p-3 overflow-x-scroll no-scrollbar"
        ref={categoryBarRef}
      >
        {newsCategories.map((category, index) => (
          <li
            onClick={() => handleCategoryChange(category)}
            className={`inline-block rounded-md px-3 py-1 dark:bg-gray-800 text-sm bg-[#EDEDED] font-semibold hover:bg-[#DFDFDF] cursor-pointer dark:hover:bg-gray-700 ${
              isTimerActive ? "cursor-not-allowed" : ""
            }`}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>

      {canScrollRight && (
        <div
          aria-label="Scroll right"
          className="absolute right-5 bg-white-to-transparent-l dark:bg-dark-to-transparent-l top-1/2 transform -translate-y-1/2 flex items-center w-20 h-8 cursor-pointer justify-end"
          onClick={scrollRight}
        >
          <MdOutlineKeyboardArrowRight className="w-7 h-7 rounded-full hover:bg-[#ededed] dark:hover:bg-gray-800" />
        </div>
      )}
      {showWarning && (
        <div
          className={` absolute top-15 right-0 transform 
            
          
            
           bg-red-500 text-white p-4 rounded-l flex items-center justify-center space-x-4`}
        >
          {loading && (
            <div className="w-5 h-10 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          )}
          <span className="text-center ">Please wait 1 minute</span>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
