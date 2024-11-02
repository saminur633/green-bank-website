// src/components/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onLogout, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg text-green-200">GREEN BANK</h1>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✕' : '☰'} {/* Toggle icon */}
        </button>

        {/* Menu Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-4 space-y-4 md:space-y-0 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {isAuthenticated ? (
            <>
              <li className="md:inline-block text-center">
                <Link to="/dashboard" className="block py-2 px-4">Home</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/account-details" className="block py-2 px-4">Account Details</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/loan-management" className="block py-2 px-4">Loan Management</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/account-creation" className="block py-2 px-4">Create Account</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/fixed-deposit" className="block py-2 px-4">Fixed Deposit</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/user-profile" className="block py-2 px-4">User Profile</Link>
              </li>
              <li className="md:inline-block text-center">
                <Link to="/customer-support" className="block py-2 px-4">Customer Support</Link>
              </li>
              <li className="md:inline-block text-center">
                <button onClick={onLogout} className="block py-2 px-4 w-full md:w-auto text-center">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="md:inline-block text-center">
              <Link to="/login" className="block py-2 px-4">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
