// components/Card.js

import React from 'react';

const Card = ({ width, height, children }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 w-${width} h-${height}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

const CardBody = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
