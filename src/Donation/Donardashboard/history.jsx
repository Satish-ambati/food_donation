import React, { useEffect, useState } from 'react';

const DonationHistory = () => {
  const [allDonations, setAllDonations] = useState([]);

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
      expiryTime: new Date(new Date().getTime() + 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      userType: 'Event',
      name: 'Wedding Hall',
      location: 'Vijayawada',
      foodType: 'Full course meal',
      quantity: 50,
      description: 'Leftover food from wedding function',
      isActive: false,
      postedAt: new Date().toISOString(),
      expiryTime: new Date(new Date().getTime() - 1 * 60 * 60 * 1000).toISOString(),
    },
  ];

  useEffect(() => {
    setAllDonations(staticDonations);
  }, []);

  const getStatus = (donation) => {
    const now = new Date();
    const expiry = new Date(donation.expiryTime);
    return !donation.isActive || expiry < now ? 'Expired' : 'Active';
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Donation History</h1>
      {allDonations.length === 0 ? (
        <p className="text-center text-gray-600">No donations to display.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allDonations.map((donation, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 bg-white border-l-4 ${
                getStatus(donation) === 'Expired' ? 'border-red-500' : 'border-green-500'
              }`}
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{donation.userType}</h2>
              <p><span className="font-medium">Name:</span> {donation.name}</p>
              <p><span className="font-medium">Location:</span> {donation.location}</p>
              <p><span className="font-medium">Food Type:</span> {donation.foodType}</p>
              <p><span className="font-medium">Quantity:</span> {donation.quantity} kg</p>
              <p><span className="font-medium">Description:</span> {donation.description}</p>
              <p><span className="font-medium">Posted At:</span> {new Date(donation.postedAt).toLocaleString()}</p>
              <p><span className="font-medium">Expires At:</span> {new Date(donation.expiryTime).toLocaleString()}</p>
              <p className="mt-2">
                <span className="font-medium">Status:</span>{' '}
                <span
                  className={`font-bold ${
                    getStatus(donation) === 'Expired' ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {getStatus(donation)}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
