import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorDashboard.css';
const DonorDashboard = () => {
  const [activeDonations, setActiveDonations] = useState([]);
  const navigate = useNavigate();
  // ✅ Static sample data
  const staticDonations = [
    {
      userType: 'Restaurant',
      name: 'Spicy Delight',
      location: 'Hyderabad',
      foodType: 'Biriyani',
      quantity: 10,
      description: 'Fresh chicken biriyani available',
      isActive: true,
      postedAt: new Date().toISOString(),
      expiryTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      userType: 'Household',
      name: 'Mrs. Rao',
      location: 'Vizag',
      foodType: 'Chapatis and curry',
      quantity: 5,
      description: 'Home-cooked chapatis with mixed veg curry',
      isActive: true,
      postedAt: new Date().toISOString(),
      expiryTime: new Date(new Date().getTime() + 1 * 60 * 60 * 1000).toISOString(), // 1 hour later
    },
    {
      userType: 'Event',
      name: 'Wedding Hall',
      location: 'Vijayawada',
      foodType: 'Full course meal',
      quantity: 50,
      description: 'Leftover food from wedding function',
      isActive: false, // Will be filtered out
      postedAt: new Date().toISOString(),
      expiryTime: new Date(new Date().getTime() + 3 * 60 * 60 * 1000).toISOString(),
    },
  ];

  useEffect(() => {
    const now = new Date();
    const filtered = staticDonations.filter((donation) => {
      const expiry = new Date(donation.expiryTime);
      return donation.isActive && expiry > now;
    });
    setActiveDonations(filtered);
  }, []);

  const handleRequest = (donation) => {
    alert(`You have requested food from ${donation.name}. They will be notified.`);
  };

  return (
    <div className="dashboard-wrapper">
      <h1>Active Food Donations</h1>
      {activeDonations.length === 0 ? (
        <p>No active donations at the moment.</p>
      ) : (
        <div className="donation-list">
          {activeDonations.map((donation, index) => (
            <div key={index} className="donation-card">
              <h2>{donation.userType}</h2>
              <p><strong>Name:</strong> {donation.name}</p>
              <p><strong>Location:</strong> {donation.location}</p>
              <p><strong>Food Type:</strong> {donation.foodType}</p>
              <p><strong>Quantity:</strong> {donation.quantity} kg</p>
              <p><strong>Description:</strong> {donation.description}</p>
              <p><strong>Posted At:</strong> {new Date(donation.postedAt).toLocaleString()}</p>
              <p><strong>Expires At:</strong> {new Date(donation.expiryTime).toLocaleString()}</p>
              <button onClick={() => handleRequest(donation)}>Request</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorDashboard;
