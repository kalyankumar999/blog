// components/Card.js

import React from 'react';

const Card = ({ width, height, children }) => {
  return (
    <div className={`glass-morphism rounded-xl p-6 w-${width} h-${height} hover-lift transition-all duration-300`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="mb-6 pb-4 border-b border-purple-400/30">
      {children}
    </div>
  );
};

const CardBody = ({ children }) => {
  return (
    <div className="text-gray-200">
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
