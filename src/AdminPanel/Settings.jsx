import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
  });

  return (
    <div className="space-y-8 p-6">
      {/* Account Settings */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Account Settings</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Security Settings */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Security Settings</h3>
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-green-600"
          />
          Two-Factor Authentication
        </label>
        <div className="flex justify-between">
          <span>Last Login: <strong>2025-04-22 10:00 AM</strong></span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Set up 2FA</button>
        </div>
      </div>

      {/* Preferences */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Preferences</h3>
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-green-600"
          />
          Dark Mode
        </label>
        <select className="p-2 border rounded mb-2">
          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>
        </select>
        <input
          type="text"
          placeholder="Timezone"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* System Settings */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">System Settings</h3>
        <div className="flex justify-between">
          <span>App Version: <strong>1.0.0</strong></span>
          <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Clear Cache</button>
        </div>
        <div className="mt-4 text-right">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
            onClick={() => alert("Logged out!")}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Notification Settings</h3>
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-green-600"
          />
          Enable Email Notifications
        </label>
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-green-600"
          />
          Enable In-App Notifications
        </label>
      </div>

      {/* Language Settings */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Language Settings</h3>
        <select className="p-2 border rounded mb-2">
          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Change Password */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-2 border rounded mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;