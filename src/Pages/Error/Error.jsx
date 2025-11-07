import React from 'react';
import { ShoppingCart, Home } from 'lucide-react';
import { useNavigate } from 'react-router';
import Logo from '../../assets/shopnest-logo.png'; // If you have a logo

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-green-50 via-white to-green-100 px-4 text-center">
      {/* Optional Logo */}
      <img src={Logo} alt="ShopNest Logo" className="w-16 h-16 object-contain mb-4 drop-shadow-lg rounded-full" />
      {/* Animated cart */}
      <ShoppingCart className="w-24 h-24 text-green-600 mb-6 animate-bounce" />
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-green-800 mb-3 drop-shadow-lg">
        Uh-oh! Aisle Not Found
      </h1>
      <p className="text-lg text-green-700 mb-6 max-w-lg mx-auto">
        Oops! The page you’re looking for isn’t stocked or freshly picked.<br />
        Please check your basket or return to our home aisle.
      </p>
      {/* Stats (to match hero section style) */}
      <div className="flex gap-6 mb-8">
        <div>
          <p className="text-2xl font-bold text-green-800">10K+</p>
          <p className="text-sm text-green-700">Products</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-800">50K+</p>
          <p className="text-sm text-green-700">Happy Customers</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-800">30min</p>
          <p className="text-sm text-green-700">Quick Delivery</p>
        </div>
      </div>
      {/* Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all font-semibold text-lg"
      >
        <Home className="w-5 h-5" />
        Back to ShopNest Home
      </button>
    </div>
  );
};

export default Error;
