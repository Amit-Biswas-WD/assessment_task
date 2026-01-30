import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const BookingLinkSection = () => {
  const [copied, setCopied] = useState(false);
  const bookingUrl = "https://techstore.com/book?id=store123";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#1A1A2E] to-[#16213E] rounded-xl flex items-center justify-center p-6">
      <div className="w-full">
        <h2 className="text-white text-lg font-normal mb-6">Booking Link</h2>

        <div className="flex items-center gap-4">
          {/* Input Container */}
          <div className="flex-1 bg-[#0d1520] backdrop-blur-sm px-5 py-4 border border-[#1e3a4f] rounded-xl">
            <input
              type="text"
              value={bookingUrl}
              readOnly
              className="w-full bg-transparent text-white/90 text-base outline-none tracking-wide"
            />
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="bg-[#4a5568] hover:bg-[#5a6578] text-white px-7 py-4 rounded-xl flex items-center gap-3 transition-all duration-200 shadow-lg"
          >
            <MdOutlineContentCopy size={20} strokeWidth={2} />
            <span className="font-medium text-base">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingLinkSection;
