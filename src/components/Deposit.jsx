// src/components/Deposit.jsx

import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";


const Deposit = () => {
  const { accounts, updateAccountBalance } = useContext(AccountContext);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    
    // Check if the account number exists
    const accountExists = accounts.some(account => account.accountNumber === accountNumber);
    if (!accountExists) {
      alert("Account number not found. Please enter a valid account number.");
      return;
    }

    if (depositAmount > 0) {
      updateAccountBalance(accountNumber, depositAmount);
      setAccountNumber('');
      setAmount('');
      alert("Deposit successful!");
    } else {
      alert("Please enter a valid deposit amount.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Deposit Money</h2>
      <form onSubmit={handleDeposit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded w-full">
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
