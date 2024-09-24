import React, { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { countries, languages } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setCountry } from "../redux/UserSlicer/userSlice";
import { ChevronDown, Check, X } from "lucide-react";

const AutocompleteSelect = React.memo(({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  }, []);

  const handleOptionSelect = useCallback((optionValue) => {
    onChange(optionValue);
    setSearchTerm("");
    setIsOpen(false);
  }, [onChange]);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative">
      <div
        className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-[#53C1C0] focus-within:ring-opacity-50 dark:focus-within:ring-[#C0474A] flex justify-between items-center cursor-pointer transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={searchTerm || (selectedOption ? selectedOption.label : '')}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          onFocus={() => setIsOpen(true)}
        />
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between items-center text-gray-800 dark:text-gray-200"
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
              {option.value === value && <Check className="h-4 w-4 text-[#53C1C0] dark:text-[#C0474A]" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

const PreferenceModal = React.memo(({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const { language: currentLanguage, country: currentCountry } = useSelector(state => state.user);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSave = useCallback(() => {
    dispatch(setLanguage(selectedLanguage));
    dispatch(setCountry(selectedCountry));
    handleClose();
  }, [dispatch, selectedLanguage, selectedCountry, handleClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ease-out"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(0.9)',
        }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Set Your Preferences</h2>
            <button 
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <AutocompleteSelect
                options={languages}
                placeholder="Select or type a language"
                value={selectedLanguage}
                onChange={setSelectedLanguage}
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Country
              </label>
              <AutocompleteSelect
                options={countries}
                placeholder="Select or type a country"
                value={selectedCountry}
                onChange={setSelectedCountry}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#53C1C0] text-white rounded-md hover:bg-[#4ce6e3] focus:outline-none focus:ring-2 focus:ring-[#53C1C0] dark:bg-[#C0474A] dark:hover:bg-[#e84c4f] transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
});

export default PreferenceModal;