import { Box } from "@mui/material";
import {} from "react";

const HomeHero = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Predict Lung Cancer Risk with Our Advanced Tool
          </h1>
          <p className="mt-6 text-gray-300 sm:text-lg">
            Start by providing some basic details about yourself. Our AI-powered
            tool will analyze your information to help predict the likelihood of
            lung cancer. This quick and easy survey could be the first step
            towards safeguarding your health.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default HomeHero;
