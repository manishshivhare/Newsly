import React from "react";
import newslyLogo from "../assets/newslyLogo.png";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { toggleTheme } from "../redux/ThemeSlicer/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700  flex items-center justify-between py-2 px-4 opacity-90">
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center focus:outline-none focus:ring-0"
        >
          <img src={newslyLogo} className="h-6 filter dark:invert" alt="Newsly Logo" />
        </a>
      </div>
      <Button
        className="w-12 h-10 border-none rounded-full focus:outline-none focus:ring-0 dark:bg-gray-900"
        color="gray"
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <IoSunny className="w-5 h-5" />
        ) : (
          <FaMoon className="w-5 h-5" />
        )}
      </Button>
    </nav>
  );
};

// Wrap Header with React.memo for optimization
export default React.memo(Header);
