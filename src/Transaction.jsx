// src/components/Transaction.jsx

const Transaction = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Date</th>
            <th className="py-2 px-4 border-b text-left">Type</th>
            <th className="py-2 px-4 border-b text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4">{tx.type}</td>
                <td className="py-2 px-4 font-bold">${tx.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-center">No transactions available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
