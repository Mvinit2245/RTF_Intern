import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-800 text-white pt-12 pb-6 px-6 md:px-12">

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/history" className="hover:underline">Our History</Link></li>
            <li><Link to="/usp" className="hover:underline">Our USP</Link></li>
            <li><Link to="/achievements" className="hover:underline">Achievement</Link></li>
            <li><Link to="/news" className="hover:underline">Latest News</Link></li>
            <li><Link to="/advantages" className="hover:underline">Our Advantages</Link></li>
            <li><Link to="/team" className="hover:underline">Our Team Commitment</Link></li>
            <li><Link to="/videos" className="hover:underline">Our TVC Videos</Link></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Need Help?</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:underline">FAQ's</Link></li>
            <li><Link to="/tracking" className="hover:underline">Tracking Status</Link></li>
            <li><Link to="/career" className="hover:underline">Career</Link></li>
            <li><Link to="/dos-donts" className="hover:underline">Do's or Don'ts</Link></li>
            <li><Link to="/customer-care" className="hover:underline">Customer Care</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Site Map</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/domestic" className="hover:underline">Domestic Shifting</Link></li>
            <li><Link to="/household" className="hover:underline">Household Shifting</Link></li>
            <li><Link to="/office" className="hover:underline">Office Shifting</Link></li>
            <li><Link to="/car" className="hover:underline">Car Shifting</Link></li>
            <li><Link to="/corporate" className="hover:underline">Corporate Shifting</Link></li>
            <li><Link to="/international" className="hover:underline">International Shifting</Link></li>
            <li><Link to="/local" className="hover:underline">Local Shifting</Link></li>
            <li><Link to="/storage" className="hover:underline">Storage Facility</Link></li>
            <li><Link to="/bulk" className="hover:underline">Bulk Commercial Movements</Link></li>
            <li><Link to="/parcel" className="hover:underline">Parcel Services</Link></li>
            <li><Link to="/factory" className="hover:underline">Factory Relocation</Link></li>
            <li><Link to="/warehousing" className="hover:underline">Warehousing</Link></li>
            <li><Link to="/cargo" className="hover:underline">Over Dimensional Cargo</Link></li>
          </ul>
        </div>

        {/* Policies + Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">APM Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/iso" className="hover:underline">ISO Policy</Link></li>
            <li><Link to="/service-policy" className="hover:underline">Services Policy</Link></li>
            <li><Link to="/quality-policy" className="hover:underline">Quality Policy</Link></li>
            <li><Link to="/packing-policy" className="hover:underline">Packing Policy</Link></li>
            <li><Link to="/training-policy" className="hover:underline">Training Policy</Link></li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/corporate-office" className="hover:underline">Corporate Office</Link></li>
            <li><Link to="/shifting" className="hover:underline">For Shifting</Link></li>
            <li><Link to="/intl-shifting" className="hover:underline">International Shifting</Link></li>
            <li><Link to="/claims" className="hover:underline">Claims</Link></li>
            <li><Link to="/feedback" className="hover:underline">Feedback</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/customer-care" className="hover:underline">Customer Care</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>Terms & Conditions | Privacy Policy | Site Map</p>
        <p className="mt-2 md:mt-0">Copyright © 2023 DRS Dilip Roadlines Ltd. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
          <a href="https://www.facebook.com/" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="https://x.com/?lang=en-in" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://www.youtube.com/" className="hover:text-red-500"><FaYoutube /></a>
          <a href="www.linkedin.com/in/gaurav-mahajan-097659253" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="https://www.instagram.com/accounts/login/" className="hover:text-pink-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
