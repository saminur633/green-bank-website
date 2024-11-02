// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AccountProvider } from './AccountContext';
import Header from './components/Header'; // Ensure Header is imported
import Login from './Login';
import Dashboard from './Dashboard';
import AccountCreation from './components/AccountCreation'; // Ensure this is imported
import AccountDetails from './AccountDetails'; // Ensure this is imported
import LoanManagement from './LoanManagement';
import Transaction from './Transaction';
import TransferMoney from './TransferMoney';
import Withdraw from './Withdraw';
import Deposit from './components/Deposit'; // Ensure this is imported
import FixedDepositPage from './pages/FixedDepositPage'; // Ensure this is imported
import UserProfile from './components/UserProfile'; // Import UserProfile
import CustomerSupport from './components/CustomerSupport'; // Import CustomerSupport

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AccountProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/account-creation"
              element={
                isAuthenticated ? <AccountCreation /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/account-details"
              element={
                isAuthenticated ? <AccountDetails /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/loan-management"
              element={
                isAuthenticated ? <LoanManagement /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/transaction"
              element={
                isAuthenticated ? <Transaction /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/transfer-money"
              element={
                isAuthenticated ? <TransferMoney /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/withdraw"
              element={
                isAuthenticated ? <Withdraw /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/deposit"
              element={
                isAuthenticated ? <Deposit /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/fixed-deposit"
              element={
                isAuthenticated ? <FixedDepositPage /> : <Navigate to="/login" replace />
              }
            />
            {/* Add routes for User Profile and Customer Support */}
            <Route
              path="/user-profile"
              element={
                isAuthenticated ? <UserProfile /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/customer-support"
              element={
                isAuthenticated ? <CustomerSupport /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </div>
      </Router>
    </AccountProvider>
  );
}

export default App;
