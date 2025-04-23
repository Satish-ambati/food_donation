import { useState } from "react";
import { PackageCheck, Users, Home, ClipboardList, Settings, Menu } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Sidebar({ isOpen, toggleSidebar, activePage, setActivePage }) {
  const navItem = (label, Icon, page) => (
    <button
      onClick={() => setActivePage(page)}
      className={`flex items-center gap-2 hover:text-green-300 w-full ${!isOpen ? 'justify-center' : ''} ${activePage === page ? 'text-green-300' : ''}`}
      title={isOpen ? label : ''}
    >
      <Icon size={20} /> {isOpen && label}
    </button>
  );

  return (
    <aside className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-green-900 text-white h-[170vh] p-5`}>
      <div className="flex items-center justify-start mb-6">
        <button onClick={toggleSidebar} className="text-white" aria-label="Toggle Sidebar">
          <Menu size={24} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>NGO</h1>
      </div>
      <nav className="space-y-4 mt-6">
        {navItem("Dashboard", Home, "dashboard")}
        {navItem("Donations", ClipboardList, "donations")}
        {navItem("Settings", Settings, "settings")}
      </nav>
    </aside>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex items-center gap-4">
      <div className="text-green-700">{icon}</div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function DonationTable() {
  const donations = [
    { id: 1, donor: "FoodHub Restaurant", item: "Biryani", quantity: "10 packs", status: "Pending", time: "2025-04-20 14:30" },
    { id: 2, donor: "Private Event", item: "Veg Meals", quantity: "15 packs", status: "Completed", time: "2025-04-18 19:00" },
    { id: 3, donor: "Hotel Delight", item: "Fried Rice", quantity: "8 packs", status: "Completed", time: "2025-04-17 12:15" },
  ];

  return (
    <div className="overflow-auto rounded-2xl shadow bg-white mt-6">
      <h3 className="text-lg font-semibold p-4">Total Donations Taken: {donations.length}</h3>
      <table className="min-w-full text-left">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="p-3">Donor</th>
            <th className="p-3">Item</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Status</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id} className="border-t">
              <td className="p-3">{donation.donor}</td>
              <td className="p-3">{donation.item}</td>
              <td className="p-3">{donation.quantity}</td>
              <td className={`p-3 ${donation.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{donation.status}</td>
              <td className="p-3 text-sm text-gray-600">{donation.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AssignVolunteer({ donationId }) {
  const [volunteer, setVolunteer] = useState("");
  const volunteers = ["John Doe", "Rita Sharma", "Ali Khan", "Priya Patel"];

  const handleAssign = () => {
    alert(`Assigned ${volunteer} to donation ID ${donationId}`);
    setVolunteer("");
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <select className="border rounded p-2 w-48" value={volunteer} onChange={(e) => setVolunteer(e.target.value)}>
        <option value="">Select Volunteer</option>
        {volunteers.map((v, i) => <option key={i} value={v}>{v}</option>)}
      </select>
      <button onClick={handleAssign} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Assign
      </button>
    </div>
  );
}

function PickupRequestForm() {
  const [form, setForm] = useState({ donor: "", item: "", quantity: "", address: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Pickup request submitted successfully!");
    setForm({ donor: "", item: "", quantity: "", address: "" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="text-xl font-semibold mb-4">New Pickup Request</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border rounded p-3"
            required
          />
        ))}
      </div>
      <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Submit Request
      </button>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </form>
  );
}

function DonationMap() {
  const containerStyle = { width: "100%", height: "400px" };
  const center = { lat: 28.6139, lng: 77.2090 };
  const donationLocations = [
    { id: 1, lat: 28.6139, lng: 77.2090, title: "Donor 1" },
    { id: 2, lat: 28.6289, lng: 77.2190, title: "Donor 2" },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Nearby Donations</h3>
      <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {donationLocations.map((loc) => (
            <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }} title={loc.title} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

function SettingsPanel() {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [passwords, setPasswords] = useState({ current: "", newPass: "" });
  const [settings, setSettings] = useState({
    language: "English",
    darkMode: false,
    notifications: true,
  });
  const [message, setMessage] = useState("");

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setMessage("Password changed successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form onSubmit={handleProfileSubmit} className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Update Profile</h3>
        <input type="text" placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="border p-3 rounded mb-4 w-full" required />
        <input type="email" placeholder="Email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="border p-3 rounded mb-4 w-full" required />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Save Changes</button>
      </form>
      <form onSubmit={handlePasswordSubmit} className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
        <input type="password" placeholder="Current Password" value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} className="border p-3 rounded mb-4 w-full" required />
        <input type="password" placeholder="New Password" value={passwords.newPass} onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })} className="border p-3 rounded mb-4 w-full" required />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Change Password</button>
      </form>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold mb-2">Other Settings</h3>
        <div className="flex justify-between">
          <label>Language:</label>
          <select value={settings.language} onChange={(e) => setSettings({ ...settings, language: e.target.value })} className="border p-2 rounded">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Marathi">Marathi</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <label>Web Appearance (Dark Mode):</label>
          <input type="checkbox" checked={settings.darkMode} onChange={() => setSettings({ ...settings, darkMode: !settings.darkMode })} />
        </div>
        <div className="flex justify-between items-center">
          <label>Notifications:</label>
          <input type="checkbox" checked={settings.notifications} onChange={() => setSettings({ ...settings, notifications: !settings.notifications })} />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help & Support</h4>
          <p className="text-sm text-gray-600">For help, contact support@example.com or check our FAQ section (coming soon).</p>
        </div>
        <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Logout</button>
      </div>
      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
}

export default function NGODashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6 bg-gray-100">
        {activePage === "dashboard" && (
          <div className="space-y-6">
            <DashboardCard title="Total Donations" value="35" icon={<PackageCheck size={28} />} />
            <DashboardCard title="Volunteers Assigned" value="15" icon={<Users size={28} />} />
            <DonationMap />
          </div>
        )}
        {activePage === "donations" && (
          <div>
            <DonationTable />
            <AssignVolunteer donationId={1} />
            <PickupRequestForm />
          </div>
        )}
        {activePage === "settings" && <SettingsPanel />}
      </main>
    </div>
  );
}