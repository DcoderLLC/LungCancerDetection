import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/images.png";

const NotFound = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
        <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn’t exist. Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <Link to="/">
                <button className="w-full sm:w-auto px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Take me home
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="w-full h-80 md:h-96 lg:h-[32rem] rounded-lg object-cover"
              src={img}
              alt="Not Found"
            />
          </div>
        </div>
      </section>
    </Box>
  );
};

export default NotFound;
