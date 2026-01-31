import { useState, useRef, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const [typeOpen, setTypeOpen] = useState(false);
  const [issuesOpen, setIssuesOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const [type, setType] = useState("All Type");
  const [issue, setIssue] = useState("All Issues");
  const [date, setDate] = useState("Today");

  const typeRef = useRef(null);
  const issueRef = useRef(null);
  const dateRef = useRef(null);

  // ✅ Outside click close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !typeRef.current?.contains(event.target) &&
        !issueRef.current?.contains(event.target) &&
        !dateRef.current?.contains(event.target)
      ) {
        setTypeOpen(false);
        setIssuesOpen(false);
        setDateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
      {/* 🔍 Search */}
      <div className="w-full xl:w-1/3">
        <div
          className={`relative border rounded-lg transition ${
            searchActive
              ? "border-blue-500 ring-2 ring-blue-500"
              : "border-[#152E62]"
          }`}
        >
          <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full pl-10 pr-4 py-3 text-[#62748E] bg-[#101A3A] rounded-lg focus:outline-none"
            value={searchQuery}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 🎛 Filters */}
      <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:justify-end gap-4">
        {/* Type */}
        <div ref={typeRef} className="relative">
          <button
            onClick={() => {
              setTypeOpen(!typeOpen);
              setIssuesOpen(false);
              setDateOpen(false);
            }}
            className="flex items-center justify-between w-full xl:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <span>{type}</span>
            <MdOutlineKeyboardArrowDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                typeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {typeOpen && (
            <div className="absolute z-20 mt-1 w-full bg-[#111B3D] border border-[#152E62] rounded-lg">
              {["All Type", "Mobile", "Laptop"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setType(item);
                    setTypeOpen(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#152E62] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Issues */}
        <div ref={issueRef} className="relative">
          <button
            onClick={() => {
              setIssuesOpen(!issuesOpen);
              setTypeOpen(false);
              setDateOpen(false);
            }}
            className="flex items-center justify-between w-full xl:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <span>{issue}</span>
            <MdOutlineKeyboardArrowDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                issuesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {issuesOpen && (
            <div className="absolute z-20 mt-1 w-full bg-[#111B3D] border border-[#152E62] rounded-lg">
              {["All Issues", "Screen", "Battery"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setIssue(item);
                    setIssuesOpen(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#152E62] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date */}
        <div ref={dateRef} className="relative sm:col-span-2 xl:col-span-1">
          <button
            onClick={() => {
              setDateOpen(!dateOpen);
              setTypeOpen(false);
              setIssuesOpen(false);
            }}
            className="flex items-center justify-between w-full xl:w-48 px-4 py-3 border border-[#152E62] bg-[#111B3D] text-white rounded-lg"
          >
            <span>{date}</span>
            <MdOutlineKeyboardArrowDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                dateOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dateOpen && (
            <div className="absolute z-20 mt-1 w-full bg-[#111B3D] border border-[#152E62] rounded-lg">
              {["Today", "Yesterday", "Last 7 Days"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setDate(item);
                    setDateOpen(false);
                  }}
                  className="px-4 py-2 text-white hover:bg-[#152E62] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
