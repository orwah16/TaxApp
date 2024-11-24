
import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="taxApp_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS clients;')
cur.execute('CREATE TABLE clients (id serial PRIMARY KEY,'
                                 'first_name varchar (150) NOT NULL,'
                                 'last_name varchar (50) NOT NULL,'
                                 'phone_number integer NOT NULL,'
                                 'type_of_employment varchar (150),'
                                 'income integer NOT NULL,'
                                 'date_added date DEFAULT CURRENT_TIMESTAMP);'
                                 )


conn.commit()

cur.close()
conn.close()