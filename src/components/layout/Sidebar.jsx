import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/dashboard", label: "Dashboard Overview", icon: <AiOutlineHome /> },
  { path: "/call-logs", label: "Call Logs", icon: <IoCallOutline /> },
  { path: "/appointments", label: "Appointments", icon: <LuCalendarDays /> },
  { path: "/settings", label: "Settings", icon: <CiSettings /> },
];

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <>
      {/* Desktop Sidebar (No changes needed) */}
      <aside className="fixed top-0 left-0 h-full w-[241px] bg-[#111B3C] shadow-lg hidden lg:block border-r border-white/5 z-30">
        <div className="flex justify-center py-6">
          <div className="h-[56px] w-[56px]">
            <img
              className="h-full w-full object-contain"
              src="/Images/Container.png"
              alt="Logo"
            />
          </div>
        </div>
        <nav className="px-4 space-y-6">
          {links.map(({ path, label, icon }) => (
            <NavLink key={path} to={path} end={path === "/dashboard"}>
              {({ isActive }) => (
                <div
                  className={`group my-5 relative flex items-center gap-3 px-4 py-2.5 rounded-[12px] transition-all duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(180deg, #152252 0%, #111B3C 100%)",
                          boxShadow:
                            "0px 0px 5px 0px #FFFFFF, 0px 0px 4px 0px #E0E9F2, inset 0px 1px 2px rgba(255,255,255,0.1)",
                        }
                      : {}
                  }
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-[12px] pointer-events-none"
                      style={{
                        padding: "1.5px",
                        background:
                          "linear-gradient(to bottom, #ffffff, #ffffff)", // ✅ here
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  )}

                  <span
                    className={`text-2xl ${isActive ? "text-white" : "text-white/70"}`}
                  >
                    {icon}
                  </span>
                  <span className="text-[14px] font-medium tracking-tight">
                    {label}
                  </span>
                  {isActive && (
                    <div
                      className="absolute left-0 right-0 -bottom-[80px] h-[80px] pointer-events-none"
                      style={{
                        width: "100%",
                        background:
                          "radial-gradient(50% 50% at 50% 0%, rgba(0, 136, 255, 0.5) 0%, rgba(0, 136, 255, 0) 100%)",
                        filter: "blur(10px)",
                        zIndex: -1,
                      }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* --- Mobile Overlay (Higher Z-index) --- */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
        />
      )}

      {/* --- Mobile Drawer Content (Highest Z-index) --- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#111B3C] shadow-2xl transform transition-transform duration-300 ease-in-out z-[9999] lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-white/5">
          <img
            className="h-10 w-10 object-contain"
            src="/Images/Container.png"
            alt="Logo"
          />
          <button
            onClick={onClose}
            className="text-white text-2xl p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <AiOutlineClose />
          </button>
        </div>

        <nav className="p-5 mt-4 flex flex-col gap-6">
          {links.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/dashboard"}
              onClick={onClose}
            >
              {({ isActive }) => (
                <div
                  className={`relative flex items-center gap-3 rounded-[12px] px-4 py-2.5 transition-all duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(180deg, #152252 0%, #111B3C 100%)",
                          boxShadow:
                            "0px 0px 5px 0px #FFFFFF, 0px 0px 4px 0px #E0E9F2, inset 0px 1px 2px rgba(255,255,255,0.1)",
                        }
                      : {}
                  }
                >
                  {isActive && (
                    <>
                      <div
                        className="absolute inset-0 rounded-[12px] pointer-events-none"
                        style={{
                          padding: "1.5px",
                          background:
                            "linear-gradient(to bottom, #0088FF, #77C0FF)",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[40px] w-full h-[40px] pointer-events-none opacity-60"
                        style={{
                          background:
                            "radial-gradient(50% 50% at 50% 0%, #0088FF 0%, rgba(0, 136, 255, 0) 100%)",
                          filter: "blur(12px)",
                          zIndex: -1,
                        }}
                      />
                    </>
                  )}
                  <span className="text-2xl">{icon}</span>
                  <span className="text-sm font-medium tracking-wide">
                    {label}
                  </span>
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
