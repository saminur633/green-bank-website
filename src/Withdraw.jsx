// src/components/Withdraw.jsx
import { useContext, useState } from "react";
import { AccountContext } from "./AccountContext";

const Withdraw = () => {
  const { accounts, updateAccountBalance } = useContext(AccountContext);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();
    const withdrawAmount = parseFloat(amount);
    const account = accounts.find((acc) => acc.accountNumber === accountNumber);

    if (!account) {
      alert("Account not found");
      return;
    }

    if (withdrawAmount > 0) {
      if (withdrawAmount <= account.balance) {
        updateAccountBalance(accountNumber, -withdrawAmount);
        alert(`Successfully withdrew $${withdrawAmount}`);
      } else {
        alert("Insufficient balance");
      }
      setAccountNumber('');
      setAmount('');
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Withdraw Money</h2>
      <form onSubmit={handleWithdraw} className="bg-white p-6 rounded shadow-md w-full max-w-md">
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Withdraw</button>
      </form>
    </div>
  );
};

export default Withdraw;
