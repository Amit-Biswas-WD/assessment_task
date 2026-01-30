import React, { useState } from "react";
import HeaderTabsSection from "./components/HeaderTabsSection";
import ProfileTabSection from "./components/ProfileTabSection";
import PasswordSettingsSection from "./components/PasswordSettingsSection";

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Profile Data
  const [profileData, setProfileData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York",
  });

  // Password Data
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileInputChange = (e) => {
    const updatedData = {
      ...profileData,
      [e.target.name]: e.target.value,
    };
    setProfileData(updatedData);
    console.log("Profile Data:", updatedData);
  };

  const handlePasswordInputChange = (e) => {
    const updatedData = {
      ...passwordData,
      [e.target.name]: e.target.value,
    };
    setPasswordData(updatedData);
    console.log("Password Data:", updatedData);
  };

  const handleSaveProfile = () => {
    console.log("Saving Profile Data:", profileData);
    setIsEditing(false);
  };

  const handleUpdatePassword = () => {
    console.log("Updating Password:", passwordData);
    // Add password validation logic here
    if (passwordData.newPassword === passwordData.confirmPassword) {
      alert("Password updated successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="">
      {/* Header Tabs */}
      <HeaderTabsSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsEditing={setIsEditing}
      />

      {/* Profile Tab Content */}
      {activeTab === "profile" && (
        <ProfileTabSection
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          profileData={profileData}
          handleProfileInputChange={handleProfileInputChange}
          handleSaveProfile={handleSaveProfile}
        />
      )}

      {/* Password Settings Tab Content */}
      {activeTab === "password" && (
        <PasswordSettingsSection
          passwordData={passwordData}
          handlePasswordInputChange={handlePasswordInputChange}
          handleUpdatePassword={handleUpdatePassword}
        />
      )}
    </div>
  );
};

export default SettingsView;
