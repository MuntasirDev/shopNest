import React, { useState } from "react";
import { User, ShieldCheck, Truck, Leaf, Shield, Clock } from "lucide-react";
import heroGrocery from "../../assets/hero-grocery.jpg"; // Adjust path if needed

// Features data
const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your groceries delivered in under 30 minutes",
  },
  {
    icon: Leaf,
    title: "Fresh Products",
    description: "Farm-fresh produce delivered to your doorstep",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Safe and encrypted payment methods",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service",
  },
];

// Features Section
const Features = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  return (
    <section className="py-16 bg-white rounded-xl mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Why Choose ShopNest?</h2>
          <p className="text-green-800 max-w-3xl mx-auto text-lg">
            Experience the best online grocery shopping with our premium features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              tabIndex={0}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onFocus={() => setActiveIdx(idx)}
              onBlur={() => setActiveIdx(null)}
              className={`bg-white border border-green-800 rounded-xl p-8 text-center cursor-pointer
                          transform transition duration-300 ease-in-out
                          ${activeIdx === idx ? "shadow-xl scale-105" : "shadow-none scale-100"}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 mx-auto">
                <feature.icon className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="font-semibold text-green-800 mb-3 text-2xl">{feature.title}</h3>
              <p className="text-base text-green-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Auth Form
const AuthForm = ({ activeTab, isSignUp, setActiveTab, setIsSignUp }) => (
  <div className="w-full max-w-md mx-auto bg-white border border-green-300 rounded-xl shadow-xl p-8 bg-opacity-90 backdrop-blur-sm">
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-bold text-green-700 drop-shadow">
        {isSignUp ? "Create Account" : "Welcome Back"}
      </h2>
      <p className="text-green-600">
        {isSignUp
          ? "Sign up to start shopping fresh!"
          : "Sign in to your grocery account"}
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <button
        onClick={() => setActiveTab("user")}
        className={`flex items-center gap-2 py-2 rounded-md ${
          activeTab === "user"
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-green-500 hover:text-green-700"
        }`}
      >
        <User className="h-4 w-4" />
        User
      </button>
      <button
        onClick={() => setActiveTab("admin")}
        className={`flex items-center gap-2 py-2 rounded-md ${
          activeTab === "admin"
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-green-500 hover:text-green-700"
        }`}
      >
        <ShieldCheck className="h-4 w-4" />
        Admin
      </button>
    </div>
    <form className="space-y-4">
      {isSignUp && (
        <div className="space-y-2">
          <label className="text-green-700 font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder={activeTab === "user" ? "John Doe" : "Admin Name"}
            required
            className="w-full border border-green-200 rounded px-3 py-2"
          />
        </div>
      )}
      <div className="space-y-2">
        <label className="text-green-700 font-medium" htmlFor="email">
          {activeTab === "user" ? "Email" : "Admin Email"}
        </label>
        <input
          id="email"
          type="email"
          placeholder={activeTab === "user" ? "you@example.com" : "admin@grocery.com"}
          required
          className="w-full border border-green-200 rounded px-3 py-2"
        />
      </div>
      <div className="space-y-2">
        <label className="text-green-700 font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          required
          className="w-full border border-green-200 rounded px-3 py-2"
        />
      </div>
      {isSignUp && (
        <div className="space-y-2">
          <label className="text-green-700 font-medium" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            required
            className="w-full border border-green-200 rounded px-3 py-2"
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
      >
        {isSignUp
          ? activeTab === "user"
            ? "Sign Up"
            : "Sign Up as Admin"
          : activeTab === "user"
          ? "Sign In"
          : "Sign In as Admin"}
      </button>
    </form>
    <div className="mt-6 text-center text-sm">
      <button
        type="button"
        onClick={() => setIsSignUp(!isSignUp)}
        className="text-green-700 hover:text-green-900 underline font-medium"
      >
        {isSignUp
          ? "Already have an account? Sign in"
          : "Don't have an account? Sign up"}
      </button>
    </div>
  </div>
);

// Main Auth + Hero Page
const Auth = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-100"
          style={{
            backgroundImage: `url(${heroGrocery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left hero content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block mb-2">
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow">
                  🌱 Fresh Groceries at Your Doorstep
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Daily
                <span className="block text-green-700">Grocery Partner</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
                Shop from thousands of fresh products and get them delivered to your home in minutes. Quality guaranteed, always.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">10K+</p>
                  <p className="text-sm text-gray-700">Products</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">50K+</p>
                  <p className="text-sm text-gray-700">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">30min</p>
                  <p className="text-sm text-gray-700">Delivery Time</p>
                </div>
              </div>
            </div>
            {/* Right hero - Auth form */}
            <div className="flex justify-center lg:justify-end">
              <AuthForm
                activeTab={activeTab}
                isSignUp={isSignUp}
                setActiveTab={setActiveTab}
                setIsSignUp={setIsSignUp}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <Features />

    </div>
  );
};

export default Auth;
