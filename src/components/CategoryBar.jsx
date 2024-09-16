import React, { useRef, useState, useEffect } from "react";
import { newsCategories } from "../utils/Data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CategoryBar = () => {
  const categoryBarRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoryBarRef.current) {
      categoryBarRef.current.scrollBy({
        left: 200,
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
    <div className="sticky top-15 z-10 bg-white dark:bg-gray-900 px-10 transition-all select-none">
      {canScrollLeft && (
        <div
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
            className="inline-block rounded-md px-3 py-1 dark:bg-gray-800 text-sm bg-[#EDEDED] font-semibold hover:bg-[#DFDFDF] cursor-pointer dark:hover:bg-gray-700"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Right Arrow */}
      {canScrollRight && (
        <div
          className="absolute right-5 bg-white-to-transparent-l dark:bg-dark-to-transparent-l top-1/2 transform -translate-y-1/2 flex items-center w-20 h-8 cursor-pointer justify-end"
          onClick={scrollRight}
        >
          <MdOutlineKeyboardArrowRight className="w-7 h-7 rounded-full hover:bg-[#ededed] dark:hover:bg-gray-800" />
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
