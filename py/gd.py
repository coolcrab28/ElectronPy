import sqlite3
from prettytable import from_db_cursor
import os.path
import sys
p = sys.argv[1]
a = p+'\students.db'
conn = sqlite3.connect(a)
c = conn.cursor()
a = c.execute("""
SELECT * FROM students;
""")
mytable = from_db_cursor(a)
txt = """ <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"><link rel='stylesheet' href='tab.css'>
  <div class='container'><center>
  """+mytable.get_html_string()+"""</div></center>"""
fp = p + '\\a.html'
# print(fp)
f = open(fp,'w')
f.write(txt)
print('done')