import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"; // Importing icon components from react-icons
import { Link } from "react-router-dom"; // Importing Link component for navigation

// Footer component to display contact information and links
const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center py-14 px-4 md:px-24 bg-amber-100 text-blue-950 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Contact Information Section */}
        <div className="footer-contact flex flex-col items-start mb-8 md:mb-0">
          <Link to="/" className="text-3xl font-bold tracking-wider mb-4">
            <span className="text-blue-950">E-book</span><span className="text-orange-500">Library</span>
          </Link>

          {/* Email Contact */}
          <p className="flex items-center mb-2 text-blue-950 cursor-pointer">
            <FaEnvelope className="mr-2" /> support@E-bookLibrary.com
          </p>

          {/* Phone Contact */}
          <p className="flex items-center mb-3 text-blue-950">
            <FaPhone className="mr-2" /> +123 456 7890
          </p>

          {/* Social Media Links */}
          <div className="footer-social flex space-x-4">
            <Link
              to="https://facebook.com/chinmaydotcom"
              className="hover:text-blue-950 cursor-pointer"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="https://twitter.com/chinmaydotcom"
              className="hover:text-blue-950 cursor-pointer"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/chinmay-sharad-kaitade/"
              className="hover:text-blue-950 cursor-pointer"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        <section className="footer-company-info mb-4 md:mb-0">
          <div id="company-section" className="mb-2">
            <h3 className="font-semibold text-2xl">Company</h3>
            <div className="w-[310px] h-1 bg-yellow-400 my-3 rounded-full"></div>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-14">
            <div>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  FAQ
                </Link>
              </li>
            </div>

            <div>
              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Terms and Conditions
                </Link>
              </li>
            </div>
          </ul>
        </section>

        <section className="footer-products">
          <div id="product-section" className="mb-2">
            <h3 className="font-semibold text-2xl">Products</h3>
            <div className="w-[310px] h-1 bg-yellow-400 my-3 rounded-full"></div>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-14">
            <div>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  BookLibrary
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Blog
                </a>
              </li>
            </div>

            <div>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Become an affiliate
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="cursor-pointer text-blue-950 hover:text-purple-500 transition-all"
                >
                  Help
                </a>
              </li>
            </div>
          </ul>
        </section>
      </div>

      {/* Centering the copyrights section also left link column empty for adding portfolio link */}
      <div id="copyrights" className="text-center mt-8 md:-mb-8">
        <h3 className="text-blue-950">
          © Copyrights. All Rights Reserved | Made by ❤️‍🔥 with{" "}
          
          <Link 
            to="https://"        
            className="font-semibold hover:text-purple-500 transition-all"
          > 
            Saransh verma 
          </Link> 
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
