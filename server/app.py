from flask import Flask, request, jsonify
from addRequest import addRequest
from flask_cors import CORS
import logging 

app = Flask(__name__)
CORS(app)

@app.route('/', defaults={'path': ''})#for non existant routs
@app.route('/<path:path>')
def catch_all(path):
    print(request,flush=True)
    return "{ }"

@app.route('/API',methods=['POST'])
def add():
    data = request.get_json()
    print("flask: add function: user: ", data['first_name'], flush=True)
    firstName = data['first_name'] 
    lastName = data['last_name']
    phoneNumber = data['phone_number']
    typeOfEmployment = data['type_of_employment']
    income = data['income']

    print(firstName," ",lastName," ",phoneNumber)
    status = addRequest(firstName, lastName, phoneNumber,typeOfEmployment,income)
    response = jsonify({'status': status}) 
    response.headers.add('Access-Control-Allow-Origin', '*')    
    return response

# Running the server in localhost:5000 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)



