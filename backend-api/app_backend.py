from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy leaderboard data
leaderboard_data = [
    {"rank": 1, "athlete_name": "John Doe", "distance": 120, "cadence": 180},
    {"rank": 2, "athlete_name": "Jane Smith", "distance": 110, "cadence": 175},
    {"rank": 3, "athlete_name": "Rahul Sharma", "distance": 105, "cadence": 170},
]

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Akura Warriors Backend API"})

@app.route("/api/leaderboard")
def leaderboard():
    return jsonify(leaderboard_data)

if __name__ == "__main__":
    app.run(debug=True)
