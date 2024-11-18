from flask import Flask, request, jsonify
from addRequest import addRequest
from flask_cors import CORS

app = Flask(__name__)

# @app.route('/', defaults={'path': ''})#for non existant routs
# @app.route('/<path:path>')
# def catch_all(path):
#     print(request)
#     return "{ }"

@app.route('/API',methods=['POST'])
def add():
    print("flask: add function: user: ",data['first_name'])
    data = request.get_json()
    firstName = data['first_name'] 
    lastName = data['last_name']
    phoneNumber = data['phone_number']
    typeOfEmployment = data['type_of_employment']
    income = data['income']

    print(firstName," ",lastName," ",phoneNumber)
    status = addRequest(firstName, lastName, phoneNumber,typeOfEmployment,income)
 
    return status

# Running the server in localhost:5000 
if __name__ == '__main__':
    CORS(app,origins=["*"])
    app.run(debug=True, host='0.0.0.0', port=5000)

@app.route('/orwah',methods=['GET'])
def getAll():
    return "orwah"



