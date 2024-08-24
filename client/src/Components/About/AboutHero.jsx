import { Box } from "@mui/material";
import lung from "../../assets/Lung Cancer assets.png";

const AboutHero = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Understanding Lung Cancer
          </h1>
          <p className="mt-6 text-gray-300 sm:text-lg">
            Lung cancer is one of the most common and deadliest forms of cancer,
            often linked to smoking and environmental pollutants. It primarily
            affects the tissues of the lungs and can spread to other parts of
            the body if not detected early. Common symptoms include persistent
            coughing, chest pain, and shortness of breath. Despite advancements
            in treatment, early detection remains key to improving survival
            rates. Our website is dedicated to providing you with the tools and
            information you need to assess your risk and take proactive steps in
            managing your lung health.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-full rounded-xl sm:h-80 md:h-96 lg:w-4/5 lg:h-[40rem]"
            src={lung}
            alt="App showcase"
          />
        </div>
      </div>
    </Box>
  );
};

export default AboutHero;
