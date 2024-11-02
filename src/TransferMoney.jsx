// src/components/TransferMoney.jsx
import React, { useContext, useState } from "react";
import { AccountContext } from "./AccountContext";

const TransferMoney = () => {
  const { accounts, updateAccountBalance } = useContext(AccountContext);
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();

    if (sourceAccount === destinationAccount) {
      alert("Source and destination accounts must be different.");
      return;
    }

    const amountValue = parseFloat(amount);
    if (amountValue <= 0) {
      alert("Amount must be greater than zero.");
      return;
    }

    const sourceAccountDetails = accounts.find(account => account.accountNumber === sourceAccount);
    if (sourceAccountDetails.balance < amountValue) {
      alert("Insufficient funds in source account.");
      return;
    }

    updateAccountBalance(sourceAccount, -amountValue);
    updateAccountBalance(destinationAccount, amountValue);
    alert(`Transferred $${amountValue} from ${sourceAccount} to ${destinationAccount}`);
    setSourceAccount('');
    setDestinationAccount('');
    setAmount('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Transfer Money</h2>
      <form onSubmit={handleTransfer} className="flex flex-col w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <select value={sourceAccount} onChange={(e) => setSourceAccount(e.target.value)} required>
          <option value="">Select Source Account</option>
          {accounts.map(account => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.accountNumber} - {account.name}
            </option>
          ))}
        </select>

        <select value={destinationAccount} onChange={(e) => setDestinationAccount(e.target.value)} required>
          <option value="">Select Destination Account</option>
          {accounts.map(account => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.accountNumber} - {account.name}
            </option>
          ))}
        </select>

        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" required />
        
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferMoney;
