from flask import Flask, request, jsonify
# import ProfileOverview from 'E:\AAASEM-V\ADSA\Striver SDE Sheet 2023\CodeStorm Hackathon\Codestorm04\Codestorm_priv\Profile\profile-app\src\Components\ProfileOverview.js';


app = Flask(__name__)

@app.route('/save-profile', methods=['POST'])
def save_personal_info():
    data = request.get_json()
    # Here you would save the data to your MongoDB database
    # For simplicity, let's just return the received data
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)
