import sqlite3
import uuid
import sys

conn = sqlite3.connect('students.db')
c = conn.cursor()
i = (str(uuid.uuid4())[0:8])
name = sys.argv[1]
age = sys.argv[2]
email = sys.argv[3]
c.execute(f"""
INSERT INTO students(id,name,age,email) VALUES('{i}','{name}', '{age}', '{email}');
""")
conn.commit()