import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaTshirt, FaHeadphones, FaMobile, FaTablet, FaGift } from 'react-icons/fa';
import { GiSmartphone, GiRunningShoe, GiCampingTent } from 'react-icons/gi';
import { IoWatchOutline } from 'react-icons/io5';

const RewardsPage = () => {
  const [userPoints, setUserPoints] = useState(30000); // Example user points

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Tech': return 'bg-blue-500';
      case 'Apparel': return 'bg-red-500';
      case 'Fitness': return 'bg-orange-500';
      case 'Outdoor': return 'bg-green-500';
      case 'Vouchers': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  // Sample data
  const badges = [
    { id: 1, name: 'First Timer', icon: <FaStar className="text-yellow-400"/>, earned: true },
    { id: 2, name: '5 Donations', icon: <FaMedal className="text-blue-500"/>, earned: false },
    { id: 3, name: 'Drop Box Pro', icon: <FaGift className="text-green-500"/>, earned: true },
    { id: 4, name: 'Volunteer Champ', icon: <FaTrophy className="text-purple-500"/>, earned: false },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', points: 12500, donations: 42 },
    { rank: 2, name: 'Sam Wilson', points: 9800, donations: 35 },
    { rank: 3, name: 'Taylor Smith', points: 7500, donations: 28 },
  ];

  const giveaways = [
    { id: 1, name: 'Premium T-Shirt', icon: <FaTshirt className="text-red-500"/>, cost: 6000, category: 'Apparel' },
    { id: 2, name: 'Wireless Earbuds', icon: <FaHeadphones className="text-blue-500"/>, cost: 15000, category: 'Tech' },
    { id: 3, name: 'Smart Watch', icon: <IoWatchOutline className="text-indigo-500"/>, cost: 25000, category: 'Tech' },
    { id: 4, name: 'Smartphone', icon: <GiSmartphone className="text-gray-700"/>, cost: 50000, category: 'Tech' },
    { id: 5, name: 'Tablet', icon: <FaTablet className="text-purple-500"/>, cost: 40000, category: 'Tech' },
    { id: 6, name: 'Camping Gear Set', icon: <GiCampingTent className="text-green-600"/>, cost: 30000, category: 'Outdoor' },
    { id: 7, name: 'Running Shoes', icon: <GiRunningShoe className="text-orange-500"/>, cost: 12000, category: 'Fitness' },
    { id: 8, name: 'Gift Card Bundle', icon: <FaGift className="text-yellow-500"/>, cost: 20000, category: 'Vouchers' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-2 flex justify-center items-center">
          <FaTrophy className="mr-3" /> Your Achievements
        </h1>
        <p className="text-lg text-gray-600">Earn points and redeem exclusive rewards!</p>
        {/* Display user points */}
        <div className="mt-4 text-xl text-gray-700 font-medium">
          <span className="font-bold text-green-700">Your Points: </span>
          <span className="text-green-500">{userPoints.toLocaleString()} pts</span>
        </div>
      </header>

      {/* Badges Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Badges Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(badge => (
            <div 
              key={badge.id}
              className={`bg-white p-4 rounded-xl shadow-sm text-center transition-all 
                ${badge.earned ? 'opacity-100' : 'opacity-50'}`}
            >
              <div className="text-4xl mb-2 flex justify-center">{badge.icon}</div>
              <h3 className="font-medium">{badge.name}</h3>
              <p className="text-xs mt-1">
                {badge.earned ? (
                  <span className="text-green-500">Earned!</span>
                ) : (
                  <span className="text-gray-400">Keep going</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
          <FaTrophy className="mr-2 text-yellow-500" /> Top Donors
        </h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {leaderboard.map(user => (
            <div 
              key={user.rank}
              className={`flex items-center justify-between p-4 border-b 
                ${user.rank === 1 ? 'bg-yellow-50' : ''}`}
            >
              <div className="flex items-center">
                <span className={`font-bold mr-4 ${
                  user.rank === 1 ? 'text-yellow-500 text-xl' : 
                  user.rank === 2 ? 'text-gray-500' : 'text-amber-800'
                }`}>
                  #{user.rank}
                </span>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.donations} donations</p>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {user.points.toLocaleString()} pts
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Giveaways Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Premium Giveaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {giveaways.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className={`h-2 ${getCategoryColor(item.category)}`}></div>
              <div className="p-5 text-center">
                <div className="text-5xl mb-4 flex justify-center text-gray-700">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                <p className="text-green-600 font-bold text-xl mb-4">
                  {item.cost.toLocaleString()} pts
                </p>
                <button 
                  className={`w-full py-3 rounded-lg font-medium ${userPoints >= item.cost ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={userPoints < item.cost}
                >
                  {userPoints >= item.cost ? 'Claim Now' : 'Earn More Points'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;
