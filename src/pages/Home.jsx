import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <div className="md:w-1/2 space-y-6 ">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight hover:scale-95 transition">
              Safe & Hassle-Free Moving Services
            </h1>
            <p className="text-lg opacity-90 hover:scale-95 transition">
              We make relocation stress-free with professional packing, secure
              transport, and on-time delivery.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Free Quote
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 hover:scale-110 transition">
            <img
              src="/public/truck-moving.png"
              alt="Moving Truck"
              className="w-full rounded-lg shadow-lg"
              
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
          <p className="mt-2 text-gray-600 hover:scale-110 transition" >
            Professional relocation solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {/* Service Card */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/moving-home.png"
                  alt="House Shifting"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800 hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  House Shifting
                </h3>
                <p className="text-gray-600 mt-2">
                  Safe and secure home relocation with expert packing.
                </p>
              </div>
            </Link>

            {/* Office Relocation */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/moving-office.png"
                  alt="Office Relocation"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  Office Relocation
                </h3>
                <p className="text-gray-600 mt-2">
                  Minimal downtime office moving solutions for businesses.
                </p>
              </div>
            </Link>

            {/* Vehicle Transport */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/vehicle-transport.png"
                  alt="Vehicle Transport"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  Vehicle Transport
                </h3>
                <p className="text-gray-600 mt-2">
                  Secure car and bike transportation with insurance coverage.
                </p>
              </div>
            </Link>

            {/* Corporate Shifting */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/corporate.png"
                  alt="Corporate Shifting"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800 hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  Corporate Shifting
                </h3>
                <p className="text-gray-600 mt-2">
                  Leader in Providing relocation & Moving solutions to
                  corporate.
                </p>
              </div>
            </Link>

            {/* International Shifting */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/Internatinal-transportation.png"
                  alt="International"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  International Shifting
                </h3>
                <p className="text-gray-600 mt-2">
                  Trusted by corporations & governments around the world.
                </p>
              </div>
            </Link>

            {/* Storage Facility */}
            <Link
              to="/contact"
              className="transform hover:scale-105 transition"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="/storage.png"
                  alt="Storage Facility"
                  className="h-20 mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-blue-800hover:text-green-600 hover:scale-110 transition-transform duration-300">
                  Storage Facility
                </h3>
                <p className="text-gray-600 mt-2">
                  Affordable, Convenient & Secured Storage facilities. Document
                  Storage.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Excellent service! My home shifting was smooth and hassle-free.
                Highly recommend."
              </p>
              <h4 className="mt-3 font-semibold text-blue-800">
                - Rahul Sharma
              </h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Professional and on-time delivery. My car arrived safely
                without a single scratch."
              </p>
              <h4 className="mt-3 font-semibold text-blue-800">
                - Priya Mehta
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Plan Your Move Today!</h2>
        <p className="mt-2 text-lg opacity-90">
          Get in touch with us for a free consultation and quote.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
