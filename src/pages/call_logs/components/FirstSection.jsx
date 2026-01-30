import React, { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

const FirstSection = () => {
  const [selectedType, setSelectedType] = useState("All Type");
  const [selectedIssues, setSelectedIssues] = useState("All Issues");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");

  const typeOptions = [
    "All Type",
    "Complaint",
    "Enquiry",
    "Suggestion",
    "Feedback",
  ];
  const issueOptions = [
    "All Issues",
    "Open",
    "In Progress",
    "Resolved",
    "Closed",
  ];
  const dateOptions = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "Custom",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Issue Management</h1>
          <p className="text-gray-600 mt-1">
            Search and filter issues from the database
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            {/* <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by phone number, issue type..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div> */}

            {/* Dropdown Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* All Type Dropdown */}
              <div className="relative group">
                <button className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700">{selectedType}</span>
                  <FaChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                <div className="absolute hidden group-hover:block w-full sm:w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {typeOptions.map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setSelectedType(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* All Issues Dropdown */}
              <div className="relative group">
                <button className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700">{selectedIssues}</span>
                  <FaChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                <div className="absolute hidden group-hover:block w-full sm:w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {issueOptions.map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setSelectedIssues(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Today Dropdown */}
              <div className="relative group">
                <button className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{selectedDate}</span>
                  </div>
                  <FaChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                <div className="absolute hidden group-hover:block w-full sm:w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {dateOptions.map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setSelectedDate(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Filters Display */}
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedType !== "All Type" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Type: {selectedType}
                <button
                  onClick={() => setSelectedType("All Type")}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedIssues !== "All Issues" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                Issues: {selectedIssues}
                <button
                  onClick={() => setSelectedIssues("All Issues")}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedDate !== "Today" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                Date: {selectedDate}
                <button
                  onClick={() => setSelectedDate("Today")}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                Search: {searchQuery}
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <FaTimes className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> This UI replicates the search and filter
            interface from the provided image. You can search by phone number or
            issue type, and use the dropdowns to filter results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
