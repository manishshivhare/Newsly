import React, { useState } from "react";
import newslyLogo from "../assets/newslyLogo.png";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { toggleTheme } from "../redux/ThemeSlicer/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import SearchBar from "./SearchBar";
import { IoMdSettings } from "react-icons/io";
import PreferenceModal from "../components/PrefrenceModal";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false); // Fix state management

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between py-2 px-4 opacity-90">
      {isOpen && <PreferenceModal handleClose={() => setIsOpen(false)} />} {/* Conditional Rendering */}
      
      <div className="flex items-center gap-5">
        <a href="/" className="flex items-center focus:outline-none focus:ring-0">
          <img src={newslyLogo} className="h-6 filter dark:invert" alt="Newsly Logo" />
        </a>
        <SearchBar />
      </div>
      
      <div className="flex gap-2">
        <Button className="w-10 h-8 border-none rounded-full focus:outline-none focus:ring-0">
          <IoMdSettings
            onClick={() => setIsOpen(true)} 
            className="w-6 h-6 hover:text-[#53c1c0] dark:hover:text-[#c0474a] text-gray-600 dark:text-gray-300"
          />
        </Button>
        <Button
          className="w-10 h-8 border-none rounded-full focus:outline-none focus:ring-0 dark:bg-gray-900"
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <IoSunny className="w-6 h-6 blue hover:text-yellow-300 text-gray-600" />
          ) : (
            <FaMoon className="w-5 h-5 hover:text-gray-500 text-gray-300" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default React.memo(Header);
