import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setNav(false);
    }
  };

  return (
    <Box>
      <div className="bg-[#141E46] flex justify-between items-center h-24 w-full mx-auto px-4 text-white relative z-50">
        {/* Logo */}
        <Link to="/">
          <h1 className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500">
            NTCC Project
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <Link
            to="/"
            className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
          >
            About
          </Link>
          <Link
            to="/team"
            className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
          >
            Team
          </Link>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#141E46] ease-in-out duration-500 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
          }
        >
          {/* Mobile Logo */}
          <h1 className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500">
            NTCC Project
          </h1>

          {/* Mobile Navigation Items */}
          <ul className="grid grid-rows-1">
            <Link
              onClick={closeMenuOnMobile}
              to="/"
              className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
            >
              Home
            </Link>

            <Link
              onClick={closeMenuOnMobile}
              to="/about"
              className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
            >
              About
            </Link>
            <Link
              onClick={closeMenuOnMobile}
              to="/team"
              className="p-4 font-extrabold text-lg hover:bg-[#7D7C7C] hover:underline underline-offset-8 decoration-rose-600  m-2 cursor-pointer duration-500"
            >
              Team
            </Link>
          </ul>
        </ul>
      </div>
    </Box>
  );
};

export default Navbar;
