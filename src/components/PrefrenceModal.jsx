import React from "react";
import { createPortal } from "react-dom";
import { IoSettingsOutline } from "react-icons/io5";

const PreferenceModal = ({ handleClose }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-6 lg:mx-8 z-10">
        <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Here you can set your prefrences
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Under developement
          <IoSettingsOutline className="w-10 h-10 mt-5 animate-spin"/>
        </p>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-[#53C1C0] hover:bg-[#4ce6e3] text-white rounded-lg dark:hover:bg-[#e84c4f] dark:bg-[#C0474A] transition duration-200"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default PreferenceModal;
