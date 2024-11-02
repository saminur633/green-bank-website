// src/components/FixedDepositForm.jsx

import { useContext, useState } from "react";
import { AccountContext } from "./AccountContext";


const FixedDepositForm = () => {
  const { addFixedDeposit } = useContext(AccountContext);
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [duration, setDuration] = useState(''); // Duration in years

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDeposit = {
      depositId: Date.now(),
      accountNumber,
      depositAmount: parseFloat(depositAmount),
      duration: parseInt(duration),
      createdAt: new Date().toISOString(),
      maturityDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + parseInt(duration))
      ).toISOString(),
    };

    addFixedDeposit(newDeposit);

    // Reset the form
    setAccountNumber('');
    setDepositAmount('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Fixed Deposit</h2>
      <div className="mb-4">
        <label>Account Number:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          className="block w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Deposit Amount:</label>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          required
          className="block w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Duration (Years):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="block w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        Create Fixed Deposit
      </button>
    </form>
  );
};

export default FixedDepositForm;
