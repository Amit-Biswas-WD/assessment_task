import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/dashboard",
    label: "Dashboard Overview",
    icon: <AiOutlineHome />,
  },
  {
    path: "/call-logs",
    label: "Call Logs",
    icon: <IoCallOutline />,
  },
  {
    path: "/appointments",
    label: "Appointments",
    icon: <LuCalendarDays />,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: <CiSettings />,
  },
];

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 h-full w-60.25 bg-[#111B3C] shadow-lg hidden lg:block">
        <div className="flex justify-center py-4">
          <div className="flex items-center gap-3 h-[56px] w-[56px]">
            <img
              className="h-full w-full bg-cover object-contain"
              src="/Images/Container.png"
              alt="Container"
            />
          </div>
        </div>

        <nav className="space-y-3 p-4">
          {links.map(({ path, label, icon }) => (
            <NavLink key={path} to={path} end={path === "/dashboard"}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 rounded-lg px-2 py-1.5 font-['Poppins'] transition-all duration-200 ${
                    isActive
                      ? "bg-[rgba(115,191,161,0.08)] text-white ring-1 ring-white/20 shadow-[0_8px_30px_rgba(115,191,161,0.12)]"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-2xl transition-colors duration-200 ${
                      isActive
                        ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        : "text-white/80"
                    }`}
                  >
                    {icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide">{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile drawer + overlay */}
      {/* Overlay */}
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40 lg:hidden" />}

      <div
        className={`fixed top-0 left-0 h-full w-60.25 bg-[#111B3C] shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3 h-[40px] w-[40px]">
            <img
              className="h-full w-full bg-cover object-contain"
              src="/Images/Container.png"
              alt="Container"
            />
          </div>
          <button onClick={onClose} aria-label="Close sidebar" className="text-white text-2xl">
            <AiOutlineClose />
          </button>
        </div>

        <nav className="space-y-3 p-4">
          {links.map(({ path, label, icon }) => (
            <NavLink key={path} to={path} end={path === "/dashboard"} onClick={onClose}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 rounded-lg px-2 py-1.5 font-['Poppins'] transition-all duration-200 ${
                    isActive
                      ? "bg-[rgba(115,191,161,0.08)] text-white ring-1 ring-white/20 shadow-[0_8px_30px_rgba(115,191,161,0.12)]"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-2xl transition-colors duration-200 ${
                      isActive
                        ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        : "text-white/80"
                    }`}
                  >
                    {icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide">{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
