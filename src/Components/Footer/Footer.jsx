import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Panda} from "lucide-react";
import Logo from '../../assets/shopnest-logo.png';


const Footer = () => (
  <footer className="bg-green-900 border-t border-green-200 py-10 mt-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      {/* Logo + tagline */}
      <div className="flex flex-col gap-3">
        <img src={Logo} alt="ShopNest Logo" className="w-20 h-20 object-contain mb-2" />
        <span className="text-2xl font-bold text-green-100">ShopNest</span>
        <span className="text-green-200 text-sm">Fresh groceries at your doorstep, every day.</span>
      </div>
      {/* Quick links */}
      <div>
        <h4 className="text-green-100 font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-green-100 text-sm">
          <li><a href="/" className="hover:underline hover:text-white">Home</a></li>
          <li><a href="/shop" className="hover:underline hover:text-white">Shop</a></li>
          <li><a href="/track-order" className="hover:underline hover:text-white">Track Order</a></li>
          <li><a href="/about" className="hover:underline hover:text-white">About</a></li>
          <li><a href="/contact" className="hover:underline hover:text-white">Contact</a></li>
        </ul>
      </div>
      {/* Contact info */}
      <div>
        <h4 className="text-green-100 font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-green-100 text-sm">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-green-200" /> +880 1960551472</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-green-200" /> support@shopnest.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-200" /> Chittagong, Bangladesh</li>
        </ul>
      </div>
      {/* Social + Delivery links */}
      <div>
        <h4 className="text-green-100 font-semibold mb-4">Connect & Delivery</h4>
        <div className="flex gap-4 items-center mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener" className="text-green-100" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="text-green-100" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="text-green-100" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
<a href="https://www.foodpanda.com.bd/city" target="_blank" rel="noopener" className="text-green-100" aria-label="RidePanda">
             <Panda className="w-6 h-6"/>
          </a>
        </div>

      </div>
    </div>
    <div className="mt-10 pt-6 border-t border-green-800 text-center text-sm text-green-100">
      &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
    </div>
  </footer>
);

export default Footer;
