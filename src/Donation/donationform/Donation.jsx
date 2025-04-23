import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationForm.css';
import foodImage from '../../assets/donation/donation.jpg';

const DonationForm = () => {
  const [foodDetails, setFoodDetails] = useState({
    userType: '',
    name: '',
    location: '',
    foodType: '',
    quantity: '',
    description: '',
    expiresAt: '',
  });

  const [donations, setDonations] = useState([]); // ✅ Local array to store donations

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const newDonation = {
      ...foodDetails,
      isActive: true,
      postedAt: now.toISOString(),
      expiryTime: new Date(now.getTime() + 3 * 60 * 60 * 1000).toISOString(), // expires in 3 hours
    };

    setDonations((prevDonations) => [...prevDonations, newDonation]); // ✅ Store in local object

    alert('Thank you! Your donation has been submitted.');
    navigate('/donatehistory');

    setFoodDetails({
      userType: '',
      name: '',
      location: '',
      foodType: '',
      quantity: '',
      description: '',
      expiresAt: '',
    });
  };

  return (
    <div className="dashboard-container">
      <div className="image-section">
        <img src={foodImage} alt="Donate Today" />
      </div>
      <div className="form-section">
        <h1>Donation Form</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="donation-form">
            <select
              name="userType"
              value={foodDetails.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Event">Event</option>
              <option value="Household">Household</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={foodDetails.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={foodDetails.location}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="foodType"
              placeholder="Food Type"
              value={foodDetails.foodType}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity (kg)"
              value={foodDetails.quantity}
              onChange={handleChange}
              required
            />

           
          <select
              name="expiresAt"
              value={foodDetails.expiresAt}
              onChange={handleChange}
              required
            >
              <option value="">How many hours food will be in good condition(HOURS) </option>
              <option value="1">0-1 </option>
              <option value="2">1-2 </option>
              <option value="3">2-3 </option>
              <option value="4">3-4 </option>
              <option value="5">4-5 </option>
              <option value="6">5-6 </option>

            </select>

            <button type="submit">Submit Donation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;