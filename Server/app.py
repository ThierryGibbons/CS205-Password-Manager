from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Ensure the JWT_SECRET_KEY is securely handled and strong
app.config['JWT_SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')

# Initialize Flask-JWT-Extended
jwt = JWTManager(app)

@app.route('/')
def home():
    # Simple route to check the server is running
    return "Hello, World!"

@app.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    # Endpoint that requires a valid JWT to access
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == "__main__":
    # Ensure the server runs in debug mode only during development
    app.run(debug=True)
