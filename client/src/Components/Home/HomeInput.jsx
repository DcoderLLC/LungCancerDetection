import { Box } from "@mui/material";
import {} from "react";

const HomeInput = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <form className="max-w-md mx-auto p-4 pt-6 mb-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Health Survey</h2>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Gender:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Other</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Smoking:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Yellow Fingers:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Anxiety:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="anxiety"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="anxiety"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Peer Pressure:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Chronic Disease:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Fatigue:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="fatigue"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="fatigue"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Allergy:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Wheezing:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Alcohol Consumption:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Cough:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Shortness of Breath:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Swallowing Difficulties:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <label className="block mb-2 text-sm font-bold text-gray-700">
              Chest Pain:
            </label>
            <div className="flex mb-4">
              <input
                type="radio"
                id="yes"
                name="smoking"
                value="yes"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Yes</label>
              <input
                type="radio"
                id="no"
                name="smoking"
                value="no"
                className="mr-2"
              />
              <label className="text-sm text-gray-700">No</label>
            </div>

            <input
              type="submit"
              value="Submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            />
          </form>
        </div>
      </div>
    </Box>
  );
};

export default HomeInput;
