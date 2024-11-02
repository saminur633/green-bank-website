// src/Dashboard.jsx

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Welcome to the Banking Sector</h2>
      <p className="mb-4 text-lg text-white">This is where you can access your bank features.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-3xl w-full">
        <Link
          to="/account-creation"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Create Account
        </Link>
        <Link
          to="/account-details"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Account Details
        </Link>
        <Link
          to="/transaction"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Transaction History
        </Link>
        <Link
          to="/transfer-money"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Transfer Money
        </Link>
        <Link
          to="/withdraw"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Withdraw
        </Link>
        <Link
          to="/deposit"
          className="flex items-center justify-center h-24 md:h-32 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md text-lg md:text-xl p-4"
        >
          Deposit
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
