// src/components/LoanManagement.jsx
import { useContext } from 'react';
import { AccountContext } from '../context/AccountContext';
import LoanApplicationForm from './LoanApplicationForm';

const LoanManagement = () => {
  const { loans, makeRepayment } = useContext(AccountContext);

  const handleRepayment = (loanId) => {
    const amount = parseFloat(prompt("Enter repayment amount"));
    if (amount > 0) {
      makeRepayment(loanId, amount);
    }
  };

  return (
    <div>
      <LoanApplicationForm />
      <h2 className="text-xl font-bold mb-4">Active Loans</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Loan ID</th>
            <th className="py-2 px-4 border-b text-left">Account Number</th>
            <th className="py-2 px-4 border-b text-left">Loan Amount</th>
            <th className="py-2 px-4 border-b text-left">Interest Rate</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.length > 0 ? (
            loans.map((loan) => (
              <tr key={loan.loanId} className="border-b">
                <td className="py-2 px-4">{loan.loanId}</td>
                <td className="py-2 px-4">{loan.accountNumber}</td>
                <td className="py-2 px-4">${loan.amount}</td>
                <td className="py-2 px-4">{loan.interestRate}%</td>
                <td className="py-2 px-4">{loan.status}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleRepayment(loan.loanId)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded"
                  >
                    Repay
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 text-center">
                No active loans available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LoanManagement;
