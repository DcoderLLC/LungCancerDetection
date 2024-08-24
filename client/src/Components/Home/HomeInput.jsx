import { Box } from "@mui/material";
import {} from "react";

const HomeInput = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <form className="p-6">
            <h2 className="text-lg font-bold text-center mb-6">Health Survey</h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Gender:
              </label>
              <div className="flex flex-wrap gap-4">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Other</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Repeated blocks for each question */}
            {questions.map((question, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  {question.label}
                </label>
                <div className="flex gap-4">
                  <div>
                    <input
                      type="radio"
                      id={`${question.name}-yes`}
                      name={question.name}
                      value="yes"
                      className="mr-2"
                    />
                    <label className="text-sm text-gray-700">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`${question.name}-no`}
                      name={question.name}
                      value="no"
                      className="mr-2"
                    />
                    <label className="text-sm text-gray-700">No</label>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <input
                type="submit"
                value="Submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

const questions = [
  { label: "Smoking:", name: "smoking" },
  { label: "Yellow Fingers:", name: "yellowFingers" },
  { label: "Anxiety:", name: "anxiety" },
  { label: "Peer Pressure:", name: "peerPressure" },
  { label: "Chronic Disease:", name: "chronicDisease" },
  { label: "Fatigue:", name: "fatigue" },
  { label: "Allergy:", name: "allergy" },
  { label: "Wheezing:", name: "wheezing" },
  { label: "Alcohol Consumption:", name: "alcoholConsumption" },
  { label: "Cough:", name: "cough" },
  { label: "Shortness of Breath:", name: "shortnessOfBreath" },
  { label: "Swallowing Difficulties:", name: "swallowingDifficulties" },
  { label: "Chest Pain:", name: "chestPain" },
];

export default HomeInput;
