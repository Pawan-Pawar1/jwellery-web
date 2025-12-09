import React from "react";
import { MapPin, Phone, Mail, Info } from "lucide-react";
import "./About.css"
export default function AboutUs() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto mt-5 privacy-container">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-purple-100 text-purple-600 w-14 h-14 rounded-full mb-4">
          <Info size={32} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">About Our Jewellery Store</h1>
        <p className="text-gray-600 mt-2">
          Trusted craftsmanship, premium designs, and pure quality.
        </p>
      </div>

      {/* ABOUT SECTION */}
      <div className=" p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3 pl-2">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a trusted jewellery shop offering a premium collection of 
          gold, diamond, and silver ornaments. Our designs combine tradition 
          with modern craftsmanship, ensuring purity, elegance, and long-lasting value.
          <br /><br />
          Each piece is carefully handpicked to maintain quality and uniqueness. 
          We continuously update our collection with Latest, Trending, and Premium 
          jewellery items to meet customer expectations.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div className=" p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Details</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="text-purple-600" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-purple-600" />
            <p className="text-gray-700">jewelleryshop@example.com</p>
          </div>
        </div>
      </div>

      {/* STORE LOCATION SECTION */}
      <div className=" p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Store Location
        </h2>

        <div className="flex items-start gap-4">
          <MapPin className="text-purple-600 mt-1" />
          <div>
            <p className="text-gray-700">
              Shop No. 12, Main Market Road,
              <br />
              Your City, Your District, 000000
            </p>

            <p className="text-gray-600 mt-4">
              We are open Monday to Saturday (10 AM – 7 PM).
            </p>
          </div>
        </div>

        {/* Map Box (Optional UI Placeholder) */}
        <div className="mt-6 w-full h-56 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-center text-gray-500">
          Map Preview (optional)
        </div>
      </div>
    </div>
  );
}
