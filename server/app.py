from flask import Flask, request, jsonify
from addRequest import addRequest
from flask_cors import CORS
import os
import psycopg2

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='taxApp_db',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn

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
    
    if( firstName == '' or lastName == '' or phoneNumber == ''):
        invalid = "invalid"
        return invalid.headers.add('Access-Control-Allow-Origin', '*') 

    conn = get_db_connection()
    with conn:
        with conn.cursor() as cur:
            cur.execute('INSERT INTO clients (first_name, last_name, phone_number, type_of_employemnt, income)'
                        'VALUES (%s, %s, %s, %s, %s) returning id',
                        (firstName, lastName, phoneNumber, typeOfEmployment, income))
            conn.commit()
            cur.close()
        conn.close()
    status = cur.fetchone()
    # status = addRequest(firstName, lastName, phoneNumber,typeOfEmployment,income)
    response = jsonify({'status': status}) 
    response.headers.add('Access-Control-Allow-Origin', '*')    
    return response

# Running the server in localhost:5000 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)



