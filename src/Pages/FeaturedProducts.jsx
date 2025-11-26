import React, { useState, useEffect } from "react";
// Import your images
import Meat from "../assets/meat_shopnest.jpg";
import Fish from "../assets/FIsh_shopnest.jpg";
import Dairy from "../assets/dairy_shopnest.jpg";
import Vegetables from "../assets/vegetables.jpg";
import Eggs from "../assets/Eggs_shopnest.jpg";
import Bakery from "../assets/Bakery_shopnest.jpg";

// --- Local Card Components (omitted for brevity) ---
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// --- Featured Categories Data (omitted for brevity) ---
const categories = [
  { img: Vegetables, title: "Fresh Vegetables", link: "/category/vegetables" },
  { img: Meat, title: "Quality Meat", link: "/category/meat" },
  { img: Fish, title: "Fresh Seafood", link: "/category/fish" },
  { img: Dairy, title: "Dairy & Eggs", link: "/category/dairy" },
  { img: Eggs, title: "Farm Fresh Eggs", link: "/category/eggs" },
  { img: Bakery, title: "Artisan Bakery", link: "/category/bakery" },
  { img: Vegetables, title: "Organic Produce", link: "/category/organic" },
  { img: Fish, title: "Frozen Delights", link: "/category/frozen" },
];

const FeaturedProducts = ({ onCategoryClick, setIsSignUp, setActiveTab }) => { // Destructure props
  const ITEMS_PER_SLIDE = 3; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, categories.length - ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-play effect (omitted for brevity)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval);
  }, [maxIndex]);

  const translateValue = `-${currentIndex * (100 / ITEMS_PER_SLIDE)}%`;

  // --- New Click Handler ---
  const handleCardClick = (e) => {
    // Prevent default navigation to the category link
    e.preventDefault(); 
    
    // 1. Ensure the user is directed to the 'Sign In' view
    if (setIsSignUp) setIsSignUp(false);
    
    // 2. Call the function passed from the parent to scroll to the form
    if (onCategoryClick) onCategoryClick();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Header Section (omitted for brevity) --- */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 max-w-3xl ">
            Fresh Categories
          </h2>
          {/* View All Button */}
          <a href="/categories" className="text-green-600 hover:text-green-700 font-semibold transition flex items-center">
            View All &nbsp;
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        {/* --- Carousel Container (omitted for brevity) --- */}
        <div className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateValue})` }}
            >
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <Card className="h-full">
                    {/* *** IMPORTANT CHANGE HERE *** */}
                    {/* Replaced category.link with the handleCardClick function */}
                    <a href="#" onClick={handleCardClick} className="block group cursor-pointer">
                      <div className="overflow-hidden">
                        <img
                          src={category.img}
                          alt={category.title}
                          className="w-full h-80 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="text-center">
                        <h3 className="font-bold text-xl text-gray-800 group-hover:text-green-600 transition">
                          {category.title}
                        </h3>
                        <span className="text-sm text-gray-500 mt-1 block">Login to Shop</span>
                      </CardContent>
                    </a>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Arrows (omitted for brevity) */}
          {categories.length > ITEMS_PER_SLIDE && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 bg-white p-4 rounded-full text-gray-700 shadow-xl opacity-75 hover:opacity-100 hover:bg-green-600 hover:text-white transition duration-300 z-10 hidden lg:block"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 bg-white p-4 rounded-full text-gray-700 shadow-xl opacity-75 hover:opacity-100 hover:bg-green-600 hover:text-white transition duration-300 z-10 hidden lg:block"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;