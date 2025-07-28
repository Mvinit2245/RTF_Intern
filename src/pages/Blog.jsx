export default function Blog() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-2 text-lg opacity-80">Latest moving tips, guides & updates</p>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Example Post */}
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
          <img src="/public/blog1.jpg" alt="Blog Post" className="w-full h-48 object-cover rounded" />
          <h3 className="mt-4 text-xl font-semibold text-blue-800">5 Tips for Hassle-Free Moving</h3>
          <p className="text-gray-600 mt-2">Make your next move stress-free with these professional packing and shifting tips...</p>
          <button className="mt-3 text-blue-600 hover:underline">Read More</button>
        </div>
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
          <img src="/public/blog2.jpg" alt="Blog Post" className="w-full h-48 object-cover rounded" />
          <h3 className="mt-4 text-xl font-semibold text-blue-800">Choosing the Right Packers & Movers</h3>
          <p className="text-gray-600 mt-2">Here are key things to consider while hiring professional relocation services...</p>
          <button className="mt-3 text-blue-600 hover:underline">Read More</button>
        </div>
        <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
          <img src="/public/blog3.jpg" alt="Blog Post" className="w-full h-48 object-cover rounded" />
          <h3 className="mt-4 text-xl font-semibold text-blue-800">How to Pack Fragile Items Safely</h3>
          <p className="text-gray-600 mt-2">Packing delicate items? Follow these steps to avoid damage during shifting...</p>
          <button className="mt-3 text-blue-600 hover:underline">Read More</button>
        </div>
      </section>
    </div>
  );
}
