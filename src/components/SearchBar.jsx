import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IoIosMic, IoIosMicOff } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const { transcript, listening, browserSupportsSpeechRecognition , resetTranscript} =
    useSpeechRecognition();

  useEffect(() => {
    let timer;
    if (listening) {
      timer = setTimeout(() => {
        SpeechRecognition.stopListening();
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [listening]);

  useEffect(() => {
    setQuery(transcript);
  }, [transcript]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const clearQuery = () => {
    setQuery("");
    resetTranscript();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className=" justify-center items-center space-x-4 hidden md:flex">
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full pl-10 pr-12 py-2 bg-white dark:bg-gray-800 border-0 rounded-full focus:ring-0 transition duration-300 ease-in-out shadow-md text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query !== "" && (
          <button
            type="button"
            onClick={clearQuery}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition duration-200"
          >
            <MdDelete className="w-5 h-5" />
          </button>
        )}

        <button
          type="button"
          onClick={toggleListening}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-[#45b2a5] dark:hover:text-[#f04144] transition duration-200"
        >
          {listening ? (
            <IoIosMicOff className="w-5 h-5" />
          ) : (
            <IoIosMic className="w-5 h-5" />
          )}
        </button>

        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-[#45b2a5] dark:hover:text-[#f04144] transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
