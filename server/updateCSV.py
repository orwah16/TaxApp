
import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="taxApp_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])
