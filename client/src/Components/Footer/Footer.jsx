import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center sm:text-left">
          <div className="flex flex-wrap justify-center mt-2 -mx-4">
            <Link
              to="/"
              className="mx-4 my-2 text-sm transition-colors duration-300 text-white font-semibold hover:text-blue-500"
              aria-label="Home"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="mx-4 my-2 text-sm transition-colors duration-300 text-white font-semibold hover:text-blue-500"
              aria-label="About"
            >
              About
            </Link>

            <Link
              to="/team"
              className="mx-4 my-2 text-sm transition-colors duration-300 text-white font-semibold hover:text-blue-500"
              aria-label="Teams"
            >
              Teams
            </Link>
          </div>
        </div>

        <hr className="my-6 md:my-10 border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white text-center sm:text-left">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
