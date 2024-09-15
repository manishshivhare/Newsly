import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { languages, countries } from "../utils/Data.js"; // Your mapped languages and countries data
import { TextField, InputLabel, MenuItem, FormControl } from "@mui/material";

const CustomSearch = ({ isOpen, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = () => {
    console.log("Search Text:", searchText);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Selected Language:", selectedLanguage);
    console.log("Selected Country:", selectedCountry);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-medium mb-3">Search Options</h2>

        {/* Search Text Input */}
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="mb-4"
        />

        {/* Date Range Inputs */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              className="w-full p-1 border rounded-md text-sm"
              placeholderText="From date"
            />
          </div>
          <div>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              className="w-full p-1 border rounded-md text-sm"
              placeholderText="To date"
            />
          </div>
        </div>

        {/* Language and Country Select Dropdowns */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <FormControl fullWidth>
            {/* <InputLabel id="language-label">Language</InputLabel> */}
            <Select
              labelId="language-label"
              id="language-select"
              value={selectedLanguage}
              onChange={setSelectedLanguage}
              options={languages} // Mapping the languages data
              placeholder="Select Language"
            />
          </FormControl>
          <FormControl fullWidth>
            {/* <InputLabel id="country-label">Country</InputLabel> */}
            <Select
              labelId="country-label"
              id="country-select"
              value={selectedCountry}
              onChange={setSelectedCountry}
              options={countries} // Mapping the countries data
              placeholder="Select Country"
            />
          </FormControl>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-300 hover:bg-gray-400 text-sm text-gray-800 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSearch}
            className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;
