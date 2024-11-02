// src/components/AccountCreation.jsx

import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";
import { useNavigate } from "react-router-dom";

const AccountCreation = () => {
  const { addAccount } = useContext(AccountContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', contact: '', email: '', nid: '' });
  const [initialDeposit, setInitialDeposit] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDepositChange = (e) => setInitialDeposit(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const depositValue = parseFloat(initialDeposit);
    if (isNaN(depositValue) || depositValue < 500) {
      setErrorMessage("You need to deposit at least 500 BDT to create an account.");
      return;
    }

    // Generate a unique account number based on the current timestamp
    const accountNumber = Date.now().toString();

    // Create a new account object
    const newAccount = { 
      accountNumber, 
      ...formData, 
      balance: depositValue, 
      transactions: [] 
    };

    // Add the new account using the context
    addAccount(newAccount);

    // Reset form fields after submission
    setFormData({ name: '', contact: '', email: '', nid: '' });
    setInitialDeposit('');
    setErrorMessage(''); // Clear error message on successful submission

    // Navigate to the account details page
    navigate('/account-details');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Create a New Account</h1>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>} {/* Error message display */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full mb-4 p-2 border rounded" 
          required 
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Contact" 
          value={formData.contact} 
          onChange={handleChange} 
          className="w-full mb-4 p-2 border rounded" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full mb-4 p-2 border rounded" 
          required 
        />
        <input 
          type="text" 
          name="nid" 
          placeholder="NID Card Number" 
          value={formData.nid} 
          onChange={handleChange} 
          className="w-full mb-4 p-2 border rounded" 
          required 
        />
        <input 
          type="number" 
          placeholder="Initial Deposit (min 500 BDT)" 
          value={initialDeposit} 
          onChange={handleDepositChange} 
          className="w-full mb-4 p-2 border rounded" 
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountCreation;
