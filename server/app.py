from flask import Flask, request, jsonify
from addRequest import addRequest

app = Flask(__name__)

@app.route('/', defaults={'path': ''})#for non existant routs
@app.route('/<path:path>')
def catch_all(path):
    return "{ }"

@app.route('/',methods=['POST'])
def add():
    eventId = request.form['eventId'] 
    userId = request.form['userId']
    rating = request.form['rating']
    print(userId," ",eventId," ",rating)
    status = addRequest(userId, eventId, rating)
 
    return status


# Running the server in localhost:5000 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)