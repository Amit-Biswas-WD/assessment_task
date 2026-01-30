import { useState } from "react";

const TableSection = () => {
  const [currentPage, setCurrentPage] = useState(2);

  const repairData = [
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "09:00",
    },
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "10:00",
    },
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "11:00",
    },
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "12:00",
    },
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "02:00",
    },
    {
      clientName: "Jane.D",
      clientPhone: "01960685765",
      clientEmail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repairType: "Screen",
      date: "02/06/2026",
      slotNo: "1",
      startTime: "03:00",
    },
  ];

  const pages = [1, 2, 3, 4, 5, "...", 11];

  return (
    <>
      <style>{`
        .custom-scrollbar {
          overflow-x: auto;
          overflow-y: visible;
        }
        
        /* Webkit browsers (Chrome, Safari, Edge) */
        .custom-scrollbar::-webkit-scrollbar {
          height: 12px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e40af;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
          border: 2px solid #1e40af;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #60a5fa;
        }
        
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #1e40af;
        }
      `}</style>

      <div className="p-2">
        {/* Table Container */}
        <div className="bg-[#101A3B] rounded-lg border border-blue-800/30 overflow-hidden">
          {/* Scrollable Table Wrapper with Custom Scrollbar */}
          <div className="custom-scrollbar">
            <table
              className="w-full border-collapse"
              style={{ minWidth: "1000px" }}
            >
              {/* Table Header */}
              <thead>
                <tr className="border-b border-blue-800/50 font-normal text-sm md:text-base">
                  <th className="text-left py-3 px-4 whitespace-nowrap">
                    Client Name
                  </th>
                  <th className="text-left py-3 px-4 whitespace-nowrap">
                    Client Phone
                  </th>
                  <th className="text-left py-3 px-4 whitespace-nowrap">
                    Client Email
                  </th>
                  <th className="text-left py-3 px-4 whitespace-nowrap">
                    Device
                  </th>
                  <th className="text-left py-3 px-4 whitespace-nowrap">
                    Repair Type
                  </th>
                  <th className="text-center py-3 px-4 whitespace-nowrap">
                    Date
                  </th>
                  <th className="text-center py-3 px-4 whitespace-nowrap">
                    Slot No
                  </th>
                  <th className="text-center py-3 px-4 whitespace-nowrap">
                    Start Time
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {repairData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-blue-800/30 hover:bg-[#121f49] transition-colors font-normal text-sm md:text-base"
                  >
                    <td className="py-3 px-4 text-[#51A2FF]">
                      {item.clientName}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF]">
                      {item.clientPhone}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF]">
                      {item.clientEmail}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF] whitespace-nowrap">
                      {item.device}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF]">
                      {item.repairType}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF] text-center">
                      {item.date}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF] text-center">
                      {item.slotNo}
                    </td>
                    <td className="py-3 px-4 text-[#CFCFCF] text-center">
                      {item.startTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-4 border-t border-blue-800/30">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="flex items-center gap-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm">Previous</span>
            </button>

            <div className="flex flex-wrap items-center gap-1">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" && setCurrentPage(page)
                  }
                  className={`min-w-[36px] h-9 px-3 rounded text-sm font-medium transition-colors
                    ${
                      page === currentPage
                        ? "bg-[#A6C8FF] text-[#001D6C]"
                        : page === "..."
                          ? "text-[#0F62FE] cursor-default"
                          : "text-[#A6C8FF] hover:bg-blue-800/30"
                    }
                  `}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(11, prev + 1))}
              className="flex items-center gap-2 px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="text-sm">Next</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableSection;
