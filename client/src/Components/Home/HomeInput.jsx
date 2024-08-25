import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const HomeInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    smoking: "",
    yellowFingers: "",
    anxiety: "",
    peerPressure: "",
    chronicDisease: "",
    fatigue: "",
    allergy: "",
    wheezing: "",
    alcoholConsumption: "",
    cough: "",
    shortnessOfBreath: "",
    swallowingDifficulties: "",
    chestPain: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data as per the input structure for the API
    const inputData = [
      formData.gender === "male" ? 0 : formData.gender === "female" ? 1 : 2, // Gender
      parseInt(formData.age), // Age
      formData.smoking === "yes" ? 2 : 1, // Smoking
      formData.yellowFingers === "yes" ? 2 : 1, // Yellow Fingers
      formData.anxiety === "yes" ? 2 : 1, // Anxiety
      formData.peerPressure === "yes" ? 2 : 1, // Peer Pressure
      formData.chronicDisease === "yes" ? 2 : 1, // Chronic Disease
      formData.fatigue === "yes" ? 2 : 1, // Fatigue
      formData.allergy === "yes" ? 2 : 1, // Allergy
      formData.wheezing === "yes" ? 2 : 1, // Wheezing
      formData.alcoholConsumption === "yes" ? 2 : 1, // Alcohol Consumption
      formData.cough === "yes" ? 2 : 1, // Cough
      formData.shortnessOfBreath === "yes" ? 2 : 1, // Shortness of Breath
      formData.swallowingDifficulties === "yes" ? 2 : 1, // Swallowing Difficulties
      formData.chestPain === "yes" ? 2 : 1, // Chest Pain
    ];

    try {
      const response = await axios.post("http://localhost:5000/predict", {
        inputs: inputData,
      });
      setPrediction(response.data.prediction);
      setModalOpen(true);
    } catch (error) {
      console.error("Error during API request", error);
    }
  };

  const handleClose = () => setModalOpen(false);

  return (
    <Box className="bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <form className="p-6" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold text-center mb-6">Health Survey</h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                value={formData.age}
                onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Lung Cancer Prediction
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Based on the input data, the likelihood of having lung cancer is:{" "}
            <strong>{prediction ? `${prediction.toFixed(2)}%` : "Loading..."}</strong>
          </Typography>
        </Box>
      </Modal>
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
