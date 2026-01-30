import React from "react";

const HeaderTabsSection = ({ activeTab, setActiveTab, setIsEditing }) => {
  return (
    <div className="flex gap-10 border-b border-[#1e3555] pb-0 mb-8">
      <button
        onClick={() => {
          setActiveTab("profile");
          setIsEditing(false);
        }}
        className={`font-normal text-sm pb-4 transition-colors ${
          activeTab === "profile"
            ? "border-b-2 border-white -mb-[2px]"
            : "text-gray-500 hover:text-gray-400"
        }`}
      >
        Profile
      </button>
      <button
        onClick={() => setActiveTab("password")}
        className={`font-normal text-sm pb-4 transition-colors ${
          activeTab === "password"
            ? "border-b-2 border-white -mb-[2px]"
            : "text-gray-500 hover:text-gray-400"
        }`}
      >
        Password Settings
      </button>
    </div>
  );
};

export default HeaderTabsSection;
