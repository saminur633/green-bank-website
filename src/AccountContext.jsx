import { createContext, useEffect, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loans, setLoans] = useState([]);
  const [fixedDeposits, setFixedDeposits] = useState([]);

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    const storedFixedDeposits = JSON.parse(localStorage.getItem("fixedDeposits")) || [];

    setAccounts(storedAccounts);
    setTransactions(storedTransactions);
    setLoans(storedLoans);
    setFixedDeposits(storedFixedDeposits);
  }, []);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans));
  }, [loans]);

  useEffect(() => {
    localStorage.setItem("fixedDeposits", JSON.stringify(fixedDeposits));
  }, [fixedDeposits]);

  // Function to add a new account
  const addAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  };

  // Function to update an existing account
  const updateAccount = (updatedAccount) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === updatedAccount.id ? updatedAccount : account
      )
    );
  };

  // Function to apply for a new loan
  const applyForLoan = (newLoan) => {
    setLoans((prevLoans) => [...prevLoans, newLoan]);
  };

  // Function to make a loan repayment
  const makeRepayment = (loanId, amount) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.loanId === loanId
          ? {
              ...loan,
              amount: loan.amount - amount,
              status: loan.amount - amount <= 0 ? "paid" : "active",
            }
          : loan
      )
    );
  };

  // Function to add a fixed deposit
  const addFixedDeposit = (newDeposit) => {
    setFixedDeposits((prevDeposits) => [...prevDeposits, newDeposit]);
  };

  return (
    <AccountContext.Provider
      value={{
        accounts,
        transactions,
        loans,
        fixedDeposits,
        addAccount,
        updateAccount,  // Add this line
        applyForLoan,
        makeRepayment,
        addFixedDeposit,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
