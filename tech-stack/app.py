import numpy as np
import tensorflow as tf
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for communication with the frontend

# Load your saved model
model = tf.keras.models.load_model('./lung_cancer_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input values from the request
        data = request.json.get('inputs')
        
        # Ensure input values are in the expected format (e.g., list of 15 values)
        if len(data) != 15:
            return jsonify({"error": "Invalid input data"}), 400

        # Convert inputs to a numpy array and reshape it for model prediction
        inputs = np.array(data).reshape(1, -1)  # Reshaping to (1, 15) for single prediction

        # Make prediction using the model
        prediction = model.predict(inputs)
        
        # Assume the prediction returns a probability score (e.g., between 0 and 1)
        prediction_percentage = float(prediction[0][0]) * 100  # Convert to percentage

        # Return the prediction as a JSON response
        return jsonify({"prediction": prediction_percentage}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
