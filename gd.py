import sqlite3
from prettytable import from_db_cursor
conn = sqlite3.connect('students.db')
c = conn.cursor()
a = c.execute("""
SELECT * FROM students;
""")
mytable = from_db_cursor(a)
txt = """ <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"><link rel='stylesheet' href='index.css'>
  <div class='container'><center>
  """+mytable.get_html_string()+"""</div></center>"""
f = open('a.html','w')
f.write(txt)
print('done')