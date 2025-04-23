import { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaHandsHelping,
  FaCog,
  FaSignOutAlt,
  FaBan,
  FaCheck,
  FaChartPie,
  FaChartBar,
  FaCalendarAlt,
  FaEllipsisV
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import Settings from "./Settings.jsx";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", loginDate: "2025-04-15", loginTime: "14:30", status: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", loginDate: "2025-04-14", loginTime: "09:15", status: "Inactive" },
  ];

  const handleDeactivateUser = (userId) => {
    console.log(`Deactivating user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    console.log(`Deleting user with ID: ${userId}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <SummaryCard label="Total Donors" value={0} />
              <SummaryCard label="Total NGOs" value={0} />
              <SummaryCard label="Total Organizations" value={0} />
              <SummaryCard label="Total Active Users" value={0} />
              <SummaryCard label="Total Donations" value={0} />
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaChartPie />
                Distribution of Users
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "NGOs", value: 0 },
                      { name: "Donors", value: 0 },
                      { name: "Organizations", value: 0 },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    <Cell fill="#00C49F" />
                    <Cell fill="#FFBB28" />
                    <Cell fill="#FF8042" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaChartBar />
                Weekly Donations
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={[
                    { day: "Mon", donations: 0 },
                    { day: "Tue", donations: 0 },
                    { day: "Wed", donations: 0 },
                    { day: "Thu", donations: 0 },
                    { day: "Fri", donations: 0 },
                    { day: "Sat", donations: 0 },
                    { day: "Sun", donations: 0 },
                  ]}
                >
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="donations" fill="#34d399" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaCalendarAlt />
                User Activity Heatmap
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {["Low", "Medium", "High", "Low", "Medium", "High", "Low"].map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded ${
                      level === "High"
                        ? "bg-green-700"
                        : level === "Medium"
                        ? "bg-green-500"
                        : "bg-green-300"
                    }`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    {level[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "users":
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <span className="text-lg font-semibold">Total Users: {filteredUsers.length}</span>
            </div>
            {filteredUsers.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <p>No users found.</p>
              </div>
            ) : (
              filteredUsers.map((user, index) => (
                <UserRow key={index} user={user} onDeactivate={handleDeactivateUser} onDelete={handleDeleteUser} />
              ))
            )}
          </div>
        );

      case "requests":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">User Feedback & Problems</h3>
            {[
              { id: 1, user: "Donor X", message: "Unable to donate food", status: "pending" },
              { id: 2, user: "NGO One", message: "Not receiving alerts", status: "pending" },
            ].map((req) => (
              <div key={req.id} className="p-4 border rounded flex justify-between items-center">
                <div>
                  <strong>{req.user}</strong>: {req.message}
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Mark as Resolved
                </button>
              </div>
            ))}
          </div>
        );

      case "settings":
        return (
          <div className="space-y-8">
            <Settings />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className={`h-full transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} bg-green-900`}>
        <div className="text-white h-full p-4 space-y-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white mb-4">
            <FaBars />
          </button>
          {sidebarOpen && <h1 className="text-2xl font-bold white-200 text-white">Admin Panel</h1>}
          <nav className="flex flex-col space-y-2">
            <SidebarButton icon={<FaTachometerAlt />} name="dashboard" label="Dashboard" activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} />
            <SidebarButton icon={<FaUsers />} name="users" label="Users" activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} />
            <SidebarButton icon={<FaHandsHelping />} name="requests" label="Requests" activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} />
            <SidebarButton icon={<FaCog />} name="settings" label="Settings" activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} />
          </nav>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4 capitalize">{activeTab}</h2>
        {renderContent()}
      </div>
    </div>
  );
}

function SidebarButton({ icon, name, label, activeTab, setActiveTab, sidebarOpen }) {
  return (
    <button
      className={`flex items-center space-x-2 p-2 rounded-md text-white ${
        activeTab === name ? "bg-green-700" : "hover:bg-green-600"
      }`}
      onClick={() => setActiveTab(name)}
    >
      <span>{icon}</span>
      {sidebarOpen && <span>{label}</span>}
    </button>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{label}</h3>
        <div className="text-gray-500">Value</div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function UserRow({ user, onDeactivate, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div className="flex-1">
        <strong>{user.name}</strong> ({user.email})<br />
        <span className="text-sm text-gray-500">Login Date: {user.loginDate} | Time: {user.loginTime}</span><br />
        <span className={`text-sm font-semibold ${user.status === "Active" ? "text-green-500" : "text-red-500"}`}>
          {user.status}
        </span>
      </div>
      <div className="relative">
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaEllipsisV />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 text-sm z-10">
            <button
              onClick={() => onDeactivate(user.id)}
              className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Deactivate
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
