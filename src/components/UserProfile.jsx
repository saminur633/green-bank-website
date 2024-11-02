// src/components/UserProfile.jsx

import { useContext, useState } from 'react';
import { AccountContext } from '../AccountContext';

const UserProfile = () => {
  const { accounts, updateAccount } = useContext(AccountContext);
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdate = () => {
    const updatedAccount = { ...accounts[0], contact, address }; // Assuming one account for simplicity
    updateAccount(updatedAccount);
  };

  const handleChangePassword = () => {
    if (currentPassword === accounts[0].password) { // Simplified check
      const updatedAccount = { ...accounts[0], password: newPassword };
      updateAccount(updatedAccount);
    } else {
      alert('Current password is incorrect');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="w-full max-w-lg p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
        
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Contact:</label>
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Address:</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Update
        </button>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Change Password</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Current Password:</label>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">New Password:</label>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
