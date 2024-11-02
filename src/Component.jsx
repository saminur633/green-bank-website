// src/components/Component.jsx
import React from 'react';

const Component = ({ children }) => {
  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      {children}
    </div>
  );
};

export default Component;
