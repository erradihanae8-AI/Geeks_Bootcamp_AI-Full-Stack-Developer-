
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/chat', methods=['POST'])
def chat():

    data = request.get_json()

    if not data or 'message' not in data:
        return jsonify({"error": "Message is required"}), 400

    message = data['message']

    if not isinstance(message, str):
        return jsonify({"error": "Message must be a string"}), 400

    if not message.strip():
        return jsonify({"error": "Message is required"}), 400

    return jsonify({
        "response": "Your message is valid!"
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)