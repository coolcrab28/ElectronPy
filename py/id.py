import sqlite3
import uuid
import sys

i = (str(uuid.uuid4())[0:8])
name = sys.argv[1]
age = sys.argv[2]
email = sys.argv[3]
p = sys.argv[4]
f = p+"\\students.db"
print(f)
conn = sqlite3.connect(p)
# c = conn.cursor()
# c.execute(f"""
# INSERT INTO students(id,name,age,email) VALUES('{i}','{name}', '{age}', '{email}');
# """)
# conn.commit()
# print('done')
# E:\\Projects\\workspaces\\electron-apps\\ElectroPy