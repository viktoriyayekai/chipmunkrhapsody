import React from 'react';

const Order = ({ choice }) => {
  return (
    <div className="container order">
      <h2>All set:)</h2>
      <p>Here is your most relevant results for today {choice.base} and </p>
      {choice.options.map(option => <div key={option}>{option}</div>)}
    </div>
  )
}

export default Order;