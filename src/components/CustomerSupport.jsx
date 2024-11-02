// src/components/CustomerSupport.jsx

const CustomerSupport = () => {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">Customer Support</h2>
        <p className="mb-2">For inquiries, contact us at:</p>
        <p className="mb-4 text-blue-600">rahmansaminur51@gmail.com</p>
        <p className="mb-4">Call us: <span className="font-semibold">+880 1748-524935</span></p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">FAQs</h3>
        <div className="bg-white rounded-md shadow-sm p-4">
          <h4 className="text-lg font-semibold">How do I reset my password?</h4>
          <p>You can reset your password by going to the 'Change Password' section in your profile.</p>
          
          <h4 className="text-lg font-semibold mt-4">How do I contact support?</h4>
          <p>You can reach our support team via the contact information provided above.</p>
        </div>
      </div>
    );
  };
  
  export default CustomerSupport;
  