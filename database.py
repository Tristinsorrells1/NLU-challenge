import csv
import sqlite3

conn = sqlite3.connect('flavors.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS flavors (
        id INTEGER PRIMARY KEY,
        category TEXT NOT NULL,
        flavor TEXT NOT NULL
    )
''')
conn.commit()

with open('./public/flavors.csv', 'r') as csvfile:
    csv_reader = csv.reader(csvfile)
    for row in csv_reader:
        if len(row) == 3:
            id_value, category, flavor = map(str.strip, row)
            cursor.execute('''
                INSERT INTO flavors (id, category, flavor)
                VALUES (?, ?, ?)
            ''', (id_value, category, flavor))

# Commit the changes and close the connection
conn.commit()
conn.close()



