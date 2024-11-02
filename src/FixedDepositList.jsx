// src/components/FixedDepositList.jsx
import { useContext } from 'react';
import { AccountContext } from './AccountContext';


const FixedDepositList = () => {
  const { fixedDeposits } = useContext(AccountContext);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fixed Deposits</h2>
      {fixedDeposits.length === 0 ? (
        <p>No fixed deposits found.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Account Number</th>
              <th className="border border-gray-200 px-4 py-2">Deposit Amount</th>
              <th className="border border-gray-200 px-4 py-2">Duration (Years)</th>
              <th className="border border-gray-200 px-4 py-2">Maturity Date</th>
            </tr>
          </thead>
          <tbody>
            {fixedDeposits.map(deposit => (
              <tr key={deposit.depositId}>
                <td className="border border-gray-200 px-4 py-2">{deposit.accountNumber}</td>
                <td className="border border-gray-200 px-4 py-2">{deposit.depositAmount}</td>
                <td className="border border-gray-200 px-4 py-2">{deposit.duration}</td>
                <td className="border border-gray-200 px-4 py-2">{new Date(deposit.maturityDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FixedDepositList;
