const PasswordSettingsSection = ({
  passwordData,
  handlePasswordInputChange,
  handleUpdatePassword,
}) => {
  return (
    <div className="max-w-md">
      {/* Current Password */}
      <div className="mb-6">
        <label className="text-xl font-normal mb-3 block">
          Current Password
        </label>
        <input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handlePasswordInputChange}
          placeholder="Enter current password"
          className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
        />
      </div>

      {/* New Password */}
      <div className="mb-6">
        <label className="text-xl font-normal mb-3 block">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordInputChange}
          placeholder="Enter new password"
          className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
        />
      </div>

      {/* Confirm New Password */}
      <div className="mb-8">
        <label className="text-xl font-normal mb-3 block">
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handlePasswordInputChange}
          placeholder="Confirm new password"
          className="w-full bg-[#0a1428] text-gray-400 placeholder-gray-600 border border-[#0C4542] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C950] transition-colors"
        />
      </div>

      {/* Update Password Button */}
      <button
        onClick={handleUpdatePassword}
        className="bg-[#00C950] hover:bg-[#08a167] text-white font-semibold px-10 py-3 rounded-xl transition-colors"
      >
        Update Password
      </button>
    </div>
  );
};

export default PasswordSettingsSection;
