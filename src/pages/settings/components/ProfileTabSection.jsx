const ProfileTabSection = ({
  isEditing,
  setIsEditing,
  profileData,
  handleProfileInputChange,
  handleSaveProfile,
}) => {
  return (
    <>
      {!isEditing ? (
        // VIEW MODE
        <>
          {/* Profile Image Section */}
          <div className="mb-10">
            <div className="text-white text-sm mb-4">Profile Image</div>
            <div className="flex items-center gap-6">
              <img
                src="/Images/profile.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <button
                onClick={() => setIsEditing(true)}
                className="bg-transparent border-2 border-gray-500 px-7 py-2 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-0">
            <div className="flex items-center py-5 border-b border-[#1e3555]">
              <div className="w-44 font-normal text-xl">Full Name: </div>
              <div className="text-gray-300 text-base">
                {profileData.fullName}
              </div>
            </div>

            <div className="flex items-center py-5 border-b border-[#1e3555]">
              <div className="w-44 font-normal text-xl">Email: </div>
              <div className="text-gray-300 text-base">{profileData.email}</div>
            </div>

            <div className="flex items-center py-5 border-b border-[#1e3555]">
              <div className="w-44 font-medium text-base">Store Name: </div>
              <div className="text-gray-300 text-base">
                {profileData.storeName}
              </div>
            </div>

            <div className="flex items-center py-5 border-b border-[#1e3555]">
              <div className="w-44 font-medium text-base">Store Address: </div>
              <div className="text-gray-300 text-base">
                {profileData.storeAddress}
              </div>
            </div>
          </div>
        </>
      ) : (
        // EDIT MODE
        <>
          {/* Profile Image Section */}
          <div className="mb-10">
            <div className="text-white text-sm mb-4">Profile Image</div>
            <div className="relative inline-block">
              <img
                src="/Images/profile.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Edit Form */}
          <div className="max-w-3xl">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Full Name */}
              <div>
                <label className="text-xl font-normal mb-3 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleProfileInputChange}
                  className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xl font-normal mb-3 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileInputChange}
                  className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
                />
              </div>

              {/* Store Name */}
              <div>
                <label className="text-xl font-normal mb-3 block">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={profileData.storeName}
                  onChange={handleProfileInputChange}
                  className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
                />
              </div>

              {/* Store Address */}
              <div>
                <label className="text-xl font-normal mb-3 block">
                  Store Address
                </label>
                <input
                  type="text"
                  name="storeAddress"
                  value={profileData.storeAddress}
                  onChange={handleProfileInputChange}
                  className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSaveProfile}
                className="bg-[#00C950] hover:bg-[#08a167] font-semibold px-10 py-3 rounded-xl transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileTabSection;
