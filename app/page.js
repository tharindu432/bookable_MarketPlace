// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-sky-400">
        {/* Cloud-like effects */}
        <div className="absolute right-20 top-32 w-32 h-20 bg-white rounded-full blur-lg opacity-50"></div>
        <div className="absolute left-1/4 top-64 w-32 h-20 bg-white rounded-full blur-lg opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Find perfect home with <br /> real estate property
          </h1>
          <p className="text-white text-lg max-w-3xl mt-4">
            Welcome to our real estate website, where we aim to provide you with
            the best possible experience in buying or selling your property.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg mt-8">
          {/* Tabs */}
          <div className="flex border-b">
            {["Buy", "Rent", "Sold", "Agent"].map((tab, index) => (
              <button
                key={index}
                className={`flex-1 py-4 text-center font-medium ${
                  index === 0 ? "border-b-2 border-black text-black" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-3 gap-4 p-6">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400">
                <option>Any</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Townhouse</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-400">
                <option>Minimum - Maximum</option>
                <option>$0 - $100,000</option>
                <option>$100,000 - $300,000</option>
                <option>$300,000 - $500,000</option>
                <option>$500,000+</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center pb-6">
            <button className="bg-black text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Houses */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between">
        <div className="w-1/2 relative">
          <div className="absolute -top-8 left-10 w-24 h-24 bg-blue-600 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-3/4 h-40 bg-blue-600"></div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute -top-8 right-10 w-24 h-24 bg-yellow-500 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-40 bg-yellow-500"></div>
        </div>
      </div>
    </div>
  );
}
