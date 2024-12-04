
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
conn = psycopg2.connect(
        host=os.environ['HOST'],
        database=os.environ['DATABASE'],
        user=os.environ['USER'],
        password=os.environ['PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS clients;')
cur.execute('''
                CREATE TABLE clients (
                        id serial PRIMARY KEY,
                        first_name varchar (150) NOT NULL,
                        last_name varchar (150) NOT NULL,
                        phone_number varchar (150) NOT NULL,
                        type_of_employment varchar (150),
                        income varchar (150),
                        date_added date DEFAULT CURRENT_TIMESTAMP,
                        CONSTRAINT unique_name UNIQUE (first_name, last_name, phone_number)
                )
        ''')



conn.commit()

cur.close()
conn.close()