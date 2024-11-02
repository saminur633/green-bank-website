// src/components/LoanManagement.jsx

import { useContext, useState } from 'react';
import { AccountContext } from './AccountContext';

const LoanManagement = () => {
  const { accounts } = useContext(AccountContext);
  const [loanAccountNumber, setLoanAccountNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loans, setLoans] = useState([]);

  const handleLoanApplication = (e) => {
    e.preventDefault();
    const amount = parseFloat(loanAmount);
    const account = accounts.find((acc) => acc.accountNumber === loanAccountNumber);

    if (!account) {
      alert('Account not found');
      return;
    }

    setLoans([...loans, { accountNumber: loanAccountNumber, loanAmount: amount, status: 'Pending' }]);
    setLoanAccountNumber('');
    setLoanAmount('');
    alert(`Loan of $${amount} applied successfully`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Loan Management</h2>
      <form onSubmit={handleLoanApplication} className="space-y-4">
        <input
          type="text"
          value={loanAccountNumber}
          onChange={(e) => setLoanAccountNumber(e.target.value)}
          placeholder="Account Number"
          required
        />
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Loan Amount"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Apply for Loan</button>
      </form>
      <ul className="mt-4">
        {loans.map((loan, index) => (
          <li key={index}>
            {`Account: ${loan.accountNumber}, Amount: $${loan.loanAmount}, Status: ${loan.status}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanManagement;
