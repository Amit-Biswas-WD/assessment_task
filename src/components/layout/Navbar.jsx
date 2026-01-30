import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ onMenuClick, title }) => {
  return (
    <div className="w-full fixed top-0 left-0 bg-[#111B3C] h-24 flex items-center justify-between px-4 lg:px-8 z-50">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="text-white text-2xl lg:hidden"
        >
          <FiMenu />
        </button>

        <h2 className="font-normal text-[24px] lg:text-[32px] text-white">
          {title ?? "Dashboard"}
        </h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <IoMdNotificationsOutline className="text-white w-6 h-6" />

        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
          <img
            src="/Images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
