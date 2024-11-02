// src/components/LoanApplicationForm.jsx
import { useContext, useState } from 'react';
import { AccountContext } from '../context/AccountContext';

const LoanApplicationForm = () => {
  const { applyForLoan } = useContext(AccountContext);
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLoan = {
      loanId: Date.now(),
      accountNumber,
      amount: parseFloat(amount),
      interestRate: parseFloat(interestRate),
      status: 'active',
      createdAt: new Date().toISOString(),
      repaymentSchedule: [],
    };
    applyForLoan(newLoan);
    setAmount('');
    setInterestRate('');
    setAccountNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Apply for a Loan</h2>
      <div>
        <label>Account Number:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
          className="block mb-2"
        />
      </div>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="block mb-2"
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
          className="block mb-4"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Apply</button>
    </form>
  );
};

export default LoanApplicationForm;
