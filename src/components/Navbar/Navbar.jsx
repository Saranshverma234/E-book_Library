// Navbar component handles the navigation for the application
// It provides links to different pages and manages the mobile menu toggle functionality.
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // Function to toggle the mobile menu open/closed
  const handleNavbar = () => setToggleMenu(!toggleMenu);

   // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setToggleMenu(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="flex justify-between items-center p-4 py-4 px-20 bg-amber-100 text-white shadow-lg">
       {/* Logo and title linking to the home page */}
      <Link to="/" className="text-3xl font-bold tracking-wide">
        <span className="text-blue-950">E-book</span> <span className="text-orange-500">Library</span>
      </Link>

      <div className="md:hidden">
        {/* Show menu icon only when the slider is not open */}
        {!toggleMenu && (
          <button onClick={handleNavbar} className="text-white">
            <HiOutlineMenuAlt3 size={30} />
          </button>
        )}
      </div>
      <div
        className={`md:flex space-x-10 ${
          toggleMenu ? "block" : "hidden"
        } md:block`}
      >
           {/* Navigation links for larger screens */}
        <Link
          to="/"
          className="hover:text-plainpurple transition-all font-semibold text-xl"
          onClick={handleLinkClick}
        ><span className="text-blue-950">
          Home</span>
        </Link>
        <Link
          to="/books"
          className="hover:text-plainpurple transition-all font-semibold text-xl mr-4"
          onClick={handleLinkClick}
        >
         <span className="text-blue-950">
         Book</span>
        </Link>
        <Link
          to="/about"
          className="hover:text-plainpurple transition-all font-semibold text-xl"
          onClick={handleLinkClick}
        >
          <span className="text-blue-950">
          About</span>
        </Link>
      </div>

      {/* Slider Menu for Mobile */}
      {toggleMenu && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="bg-gray-800 w-64 h-full shadow-lg fixed right-0 top-0 z-10 p-10 transition-transform transform translate-x-0">
            <div className="flex justify-end p-4">
              {/* Close button for the mobile menu */}
              <button
                onClick={handleNavbar}
                className="text-white hover:text-plainpurple"
              >
                <HiOutlineMenuAlt3 size={30} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
               {/* Navigation links for mobile menu */}
              <Link
                to="/"
                className="text-white hover:text-plainpurple font-semibold text-xl"
                onClick={handleLinkClick}
              >
               <span className="text-black">
               Home</span>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-plainpurple font-semibold text-xl"
                onClick={handleLinkClick}
              >
                <span className="text-black">
                About</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
