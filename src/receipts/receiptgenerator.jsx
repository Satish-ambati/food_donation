import React from 'react';
import { useLocation } from 'react-router-dom';

const Receipts = () => {
  const location = useLocation();
  const { userType, name, foodType, quantity, date } = location.state;

  const receiptNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg border-2 border-green-200"
        style={{
          fontFamily: "'Courier New', monospace",
          backgroundColor: '#ffffff',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-3">FOOD DONATION RECEIPT</h1>
          <p className="text-sm text-gray-500 mt-2">Thank you for your generosity</p>
          <div className="border-t-2 border-b-2 border-green-100 my-4 py-3">
            <p className="text-sm font-semibold">RECEIPT #{receiptNumber}</p>
          </div>
        </div>
        <div className="space-y-4 mb-8 flex-grow">
          <div className="flex justify-between border-b border-dashed pb-3 text-base">
            <span className="font-semibold">Donor Type:</span>
            <span className="text-gray-700">{userType}</span>
          </div>
          <div className="flex justify-between border-b border-dashed pb-3 text-base">
            <span className="font-semibold">Donor Name:</span>
            <span className="text-gray-700">{name}</span>
          </div>
          <div className="flex justify-between border-b border-dashed pb-3 text-base">
            <span className="font-semibold">Food Type:</span>
            <span className="text-gray-700">{foodType}</span>
          </div>
          <div className="flex justify-between border-b border-dashed pb-3 text-base">
            <span className="font-semibold">Quantity:</span>
            <span className="text-gray-700">{quantity}</span>
          </div>
          <div className="flex justify-between border-b border-dashed pb-3 text-base">
            <span className="font-semibold">Date:</span>
            <span className="text-gray-700">{date}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-3">This receipt is proof of your donation</p>
          <div className="flex justify-center space-x-5 text-sm mt-5">
            <span className="px-3 py-2 bg-green-50 text-green-600 rounded-lg">Tax Deductible</span>
            <span className="px-3 py-2 bg-green-50 text-green-600 rounded-lg">Non-Profit</span>
          </div>
          <p className="text-sm mt-5 text-gray-500">
            For questions, contact: donations@foodhelp.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipts;
