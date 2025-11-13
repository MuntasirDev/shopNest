import React from "react";
import { Truck, Leaf, Shield, Clock, Users, Award } from "lucide-react";
import aboutImage from "../assets/hero-grocery.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-green-800">
      {/* Hero Section */}
      <section className="relative bg-green-100 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="About ShopNest"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 drop-shadow">
            About <span className="text-green-700">ShopNest</span>
          </h1>
          <p className="text-lg md:text-xl text-green-700 leading-relaxed">
            ShopNest is your trusted grocery delivery partner — bringing
            farm-fresh products and daily essentials straight to your door with
            quality, speed, and care.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-green-700 leading-relaxed">
              ShopNest started with a simple idea — to make grocery shopping
              easier and faster for every household in Bangladesh. Our journey
              began with a few local farmers and dedicated delivery partners,
              and today, we’ve grown into a trusted online platform that serves
              thousands of families daily.
            </p>
            <p className="text-lg text-green-700 mt-4 leading-relaxed">
              We take pride in connecting our customers directly with local
              producers, ensuring the freshest products while empowering the
              farming community.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="ShopNest Mission"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-green-700 leading-relaxed">
            We aim to make your daily grocery shopping effortless and
            time-saving. By connecting local farmers and trusted suppliers
            directly with our customers, we ensure every item is fresh,
            affordable, and delivered with precision and care.
          </p>
        </div>
      </section>

      {/* What Makes Us Special (List View instead of Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
            What Makes Us Special
          </h2>

          <ul className="space-y-10">
            {[
              {
                icon: Truck,
                title: "Fast & Reliable Delivery",
                desc: "We ensure your groceries reach you in the shortest time possible — usually within 30 minutes — so your daily routine stays smooth.",
              },
              {
                icon: Leaf,
                title: "Fresh & Organic Products",
                desc: "Our partnerships with local farms mean you get fresh, pesticide-free vegetables and fruits directly from the source.",
              },
              {
                icon: Shield,
                title: "Secure Payments",
                desc: "Shop confidently with fully encrypted payment methods that keep your data protected and private.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Whether day or night, our support team is always available to assist you with any query or concern.",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "We believe in long-term relationships with our customers — your satisfaction drives everything we do.",
              },
              {
                icon: Award,
                title: "Trusted by Thousands",
                desc: "Over 50,000 satisfied customers rely on ShopNest daily for their groceries and essentials.",
              },
            ].map((f, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="p-3 bg-green-100 rounded-full">
                  <f.icon className="w-8 h-8 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-green-700">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join the ShopNest Family Today
        </h2>
        <p className="text-lg mb-8">
          Experience grocery shopping that’s faster, fresher, and smarter.
        </p>
        <a
          href="/"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
        >
          Start Shopping
        </a>
      </section>
    </div>
  );
};

export default About;
