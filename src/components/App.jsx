// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccountProvider } from './components/AccountContext';
import Home from './components/Home';
import LoanManagement from './components/LoanManagement';
import TransferMoney from './components/TransferMoney';
import Withdraw from './components/Withdraw';
import Footer from './components/Footer';
import FixedDeposit from './components/FixedDeposit';
import UserProfile from './components/UserProfile'; // Import UserProfile
import CustomerSupport from './components/CustomerSupport'; // Import CustomerSupport
import Header from './components/Header'; // Import Header

const App = () => {
  return (
    <AccountProvider>
      <Router>
        <Header isAuthenticated={true} onLogout={() => {}} /> {/* Pass props as needed */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loan-management" element={<LoanManagement />} />
              <Route path="/transfer-money" element={<TransferMoney />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/fixed-deposit" element={<FixedDeposit />} />
              <Route path="/user-profile" element={<UserProfile />} /> {/* Add route for User Profile */}
              <Route path="/customer-support" element={<CustomerSupport />} /> {/* Add route for Customer Support */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AccountProvider>
  );
};

export default App;
