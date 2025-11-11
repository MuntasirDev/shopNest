import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import Logo from '../../assets/shopnest-logo.png'; 

const NavBar = () => {
  return (
    <nav className="w-full px-6 py-3 flex justify-between items-center shadow-sm">
      
      {/* Left side: Logo + Text */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="ShopNest Logo" className="w-12 h-12 object-contain cursor-pointer transition-colors" />
        <div className="flex flex-col">
          <span className="text-green-500 hover:text-green-700 cursor-pointer transition-colors font-bold text-xl">ShopNest</span>
          <span className="text-white text-sm">Fresh & Fast Delivery</span>
        </div>
      </div>

      {/* Right side: Shopping Cart */}
      <div>
        <ShoppingBasket className="w-6 h-6 text-green-500 hover:text-green-900 cursor-pointer transition-colors " />
      </div>

    </nav>
  );
};

export default NavBar;
