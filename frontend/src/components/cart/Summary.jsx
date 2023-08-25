import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Summary() {
  const cartItems = useSelector(state => state.product.cartItems);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * (1 - item.discount / 100) * item.quantity;
    });
    return total;
  };

  return (
    <div className='flex flex-col justify-end p-4 bg-white rounded-lg shadow-lg'>
      <div className='flex flex-row justify-between mb-4'>
        <p className='font-semibold'>Subtotal</p>
        <p className='text-lg'>{calculateTotal().toFixed(2)} USD</p>
      </div>
      <p className='text-sm text-gray-500 mb-2'>
        Taxes and shipping calculated at checkout
      </p>
      <Link to={`/checkout`}>
      <button className='bg-blue hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold  transition-transform transform hover:scale-105'>
        Check out
      </button></Link>
    </div>
  );
}

export default Summary;
