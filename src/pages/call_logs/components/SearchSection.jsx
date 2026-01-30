import { useState } from "react";
import { GoSearch } from "react-icons/go";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeOpen, setTypeOpen] = useState(false);
  const [issuesOpen, setIssuesOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between gap-10">
      {/* Search Input */}
      <div className="w-1/2">
        <div className="relative">
          <GoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full pl-10 pr-4 py-3 text-[#62748E] bg-[#101A3A] font-normal text-base border border-[#152E62] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Static Filter Buttons (no dropdown functionality) */}
      <div className="w-1/2 flex flex-col sm:flex-row gap-4">
        <div className="relative">
          <button
            onClick={() => setTypeOpen(!typeOpen)}
            className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <span className="text-gray-700">All Type</span>
            {typeOpen ? (
              <MdOutlineKeyboardArrowUp className="h-4 w-4 text-gray-500" />
            ) : (
              <MdOutlineKeyboardArrowDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIssuesOpen(!issuesOpen)}
            className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <span className="text-gray-700">All Issues</span>
            {issuesOpen ? (
              <MdOutlineKeyboardArrowUp className="h-4 w-4 text-gray-500" />
            ) : (
              <MdOutlineKeyboardArrowDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setDateOpen(!dateOpen)}
            className="flex items-center justify-between w-full sm:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Today</span>
            </div>
            {dateOpen ? (
              <MdOutlineKeyboardArrowUp className="h-4 w-4 text-gray-500" />
            ) : (
              <MdOutlineKeyboardArrowDown className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
