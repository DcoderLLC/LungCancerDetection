import { Box } from "@mui/material";

const AboutHero = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Building Your Next App with Our Awesome Components
          </h1>
          <p className="mt-6 text-gray-300 sm:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-64 rounded-xl sm:h-80 md:h-96 lg:w-4/5 lg:h-[28rem]"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="App showcase"
          />
        </div>
      </div>
    </Box>
  );
};

export default AboutHero;
