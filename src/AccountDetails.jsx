import { useContext, useState } from "react";
import Transaction from "./Transaction";
import { AccountContext } from "./AccountContext";

const AccountDetails = () => {
  const { accounts, transactions, deleteAccount, exchangeAccount } = useContext(AccountContext);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleDelete = (accountNumber) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      deleteAccount(accountNumber);
    }
  };

  const handleExchange = (account) => {
    if (window.confirm("Are you sure you want to update this account?")) {
      const updatedAccountDetails = {
        ...account,
        name: prompt("Enter new name", account.name) || account.name,
        contact: prompt("Enter new contact", account.contact) || account.contact,
        email: prompt("Enter new email", account.email) || account.email,
      };
      exchangeAccount(updatedAccountDetails);
    }
  };

  const handleTransactionClick = (account) => {
    setSelectedAccount(account);
  };

  const closeTransactionHistory = () => {
    setSelectedAccount(null);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-bold mb-4">Account Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Account Number</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Account Holder</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Contact</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Email</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Current Balance</th>
              <th className="py-2 px-4 border-b text-left text-xs sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <tr key={account.accountNumber} className="border-b text-xs sm:text-base">
                  <td className="py-2 px-4 whitespace-nowrap">{account.accountNumber}</td>
                  <td className="py-2 px-4">{account.name}</td>
                  <td className="py-2 px-4">{account.contact}</td>
                  <td className="py-2 px-4">{account.email}</td>
                  <td className="py-2 px-4 font-bold">${account.balance}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded mb-1 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                      onClick={() => handleTransactionClick(account)}
                    >
                      View Transactions
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded mb-1 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                      onClick={() => handleDelete(account.accountNumber)}
                    >
                      Delete Account
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded w-full sm:w-auto"
                      onClick={() => handleExchange(account)}
                    >
                      Exchange Account
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center">
                  No accounts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedAccount && (
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4">
            Transaction History for {selectedAccount.accountNumber}
          </h3>
          <button
            className="bg-red-500 text-white py-1 px-2 rounded mb-4"
            onClick={closeTransactionHistory}
          >
            Close
          </button>
          <Transaction
            transactions={transactions.filter(
              (tx) => tx.accountNumber === selectedAccount.accountNumber
            )}
          />
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
