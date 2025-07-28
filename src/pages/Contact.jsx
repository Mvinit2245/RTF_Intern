export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg opacity-80">Get in touch for a free quote</p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded"></textarea>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-900">Corporate Office</h3>
          <p className="mt-2 text-gray-700">123 Packers Street, Mumbai, India</p>
          <p className="mt-2 text-gray-700">📞 +91 98765 43210</p>
          <p className="mt-2 text-gray-700">📧 info@safeshiftlogistics.com</p>

          <h3 className="mt-6 text-xl font-bold text-blue-900">Customer Care</h3>
          <p className="mt-2 text-gray-700">Toll-Free: 1800-123-4567</p>
        </div>
      </section>
    </div>
  );
}
