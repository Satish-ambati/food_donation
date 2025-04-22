import React, { useEffect, useState } from 'react';

const PartnerDirectory = () => {
  const [partnerList, setPartnerList] = useState([]);

  useEffect(() => {
    const storedNgos = JSON.parse(localStorage.getItem('ngos')) || [];
    console.log('Loaded NGOs:', storedNgos);
    if (storedNgos.length > 0) {
      setPartnerList(storedNgos);
    }
  }, []);

  useEffect(() => {
    const dummyNgos = [
      {
        id: 'ngo1',
        name: 'Helping Hands NGO',
        type: 'NGO',
        location: 'Delhi',
        serviceArea: 'Slums and Orphanages',
        contactEmail: 'help@hands.org',
        contactPhone: '9876543210',
        contactWebsite: 'https://helpinghands.org',
        joinedOn: new Date().toISOString(),
        mealsDonated: 1200,
        mealsReceived: 0,
        logoUrl: 'https://via.placeholder.com/120',
        verified: true,
      },
      {
        id: 'ngo2',
        name: 'Care India',
        type: 'NGO',
        location: 'Mumbai',
        serviceArea: 'Underprivileged Areas',
        contactEmail: 'contact@careindia.org',
        contactPhone: '1234567890',
        contactWebsite: 'https://careindia.org',
        joinedOn: new Date().toISOString(),
        mealsDonated: 2000,
        mealsReceived: 300,
        logoUrl: 'https://via.placeholder.com/100',
        verified: true,
      },
    ];

    if (!localStorage.getItem('ngos')) {
      localStorage.setItem('ngos', JSON.stringify(dummyNgos));
    }
  }, []);

  if (partnerList.length === 0) {
    return <p className="text-center text-lg text-gray-600 mt-6">Loading or No Partners Available...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Partner Directory</h1>

      {partnerList.map((partner) => (
        <div
          key={partner.id}
          className="flex flex-wrap bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 mb-6 p-6"
        >
          <div className="flex-1 min-w-[150px] flex justify-center items-center p-4">
            <img
              src={partner.logoUrl}
              alt={`${partner.name} Logo`}
              className="w-[120px] h-[120px] rounded-full object-cover border-2 border-gray-300"
            />
          </div>

          <div className="flex-1 min-w-[300px] md:flex-[3] px-4 py-2">
            <h2 className="text-2xl font-semibold text-gray-800">{partner.name}</h2>
            <p className="mt-2"><strong>Type:</strong> {partner.type}</p>
            <p><strong>Location:</strong> {partner.location} <span className="ml-1">📍</span></p>
            <p><strong>Service Area:</strong> {partner.serviceArea}</p>
            <p className="mt-2"><strong>Contact Info:</strong></p>
            <ul className="list-disc list-inside ml-2">
              <li>Email: {partner.contactEmail}</li>
              <li>Phone: {partner.contactPhone}</li>
              <li>
                Website:{' '}
                <a
                  href={partner.contactWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {partner.contactWebsite}
                </a>
              </li>
            </ul>
            <p className="mt-2">
              <strong>Joined On:</strong> {new Date(partner.joinedOn).toLocaleDateString()}
            </p>
            <p><strong>Donation Stats:</strong> Meals Donated: {partner.mealsDonated}, Meals Received: {partner.mealsReceived}</p>
            {partner.verified && (
              <span className="inline-block mt-2 px-3 py-1 bg-emerald-700 text-white text-sm rounded-md font-semibold">
                Verified
              </span>
            )}
          </div>

          <div className="flex-1 min-w-[200px] flex flex-col items-end justify-center p-4 gap-3 md:items-center">
            <a
              href={`/viewProfile/${partner.id}`}
              className="w-full text-center px-4 py-2 bg-emerald-700 text-white rounded-md font-bold hover:bg-emerald-800 transition"
            >
              View Profile
            </a>
            <a
              href={`/requestHelp/${partner.id}`}
              className="w-full text-center px-4 py-2 bg-emerald-700 text-white rounded-md font-bold hover:bg-emerald-800 transition"
            >
              Make Partner
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerDirectory;
