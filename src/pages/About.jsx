export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg opacity-90">
            Your trusted relocation partner providing safe, secure and hassle-free moving services across India.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div className="hover:scale-105 transition">
            <img src="/public/moving-truck-2.png" alt="Company" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Who We Are</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We are a professional Packers & Movers company with years of experience in delivering smooth and safe relocations. 
              From household shifting to corporate and international moving, we ensure top-quality service with 100% customer satisfaction.
            </p>
            <p className="mt-4 text-gray-700">
              Our team is trained in modern packing techniques, secure transport, and timely delivery to make your move stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-800">10+ Years Experience</h3>
              <p className="text-gray-600 mt-2">Trusted by thousands of customers across India.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-800">Professional Packing</h3>
              <p className="text-gray-600 mt-2">Secure and damage-free transportation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-800">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Dedicated customer care for your queries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-800">Affordable Pricing</h3>
              <p className="text-gray-600 mt-2">Best-in-class service at competitive rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-800 text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">5000+</h3>
            <p className="mt-2">Successful Moves</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-2">Customer Satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2">Cities Covered</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Plan Your Move With Us!</h2>
        <p className="mt-2 text-gray-700">Get in touch today for a free quote and professional consultation.</p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
