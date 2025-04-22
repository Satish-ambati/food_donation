import React from 'react';
import Receipt from './receiptgenerator';
function Trail() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Receipt
        userType="Donor"
        name="Ambati Satish"
        foodType="Cooked food"
        quantity="20 packs"
        date={new Date().toLocaleDateString()}
      />
    </div>
  );
}
export default Trail;
