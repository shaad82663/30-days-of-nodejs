const executeQuery = require('./query')

//------------------------------------Creating database------------------------------------
// executeQuery('CERATE DATABASE mydb')

//------------------------------------Create a table in db.------------------------------------
executeQuery('USE mydb')
// executeQuery('CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))')

//------------------------------------Adding primary key to the table.------------------------------------
// executeQuery('ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY')

//------------------------------------Inserting data.------------------------------------
// executeQuery('INSERT INTO customers (name, address) VALUES (\'Wipro Pvt. Ltd.\', \'NH-34\')')
// executeQuery('INSERT INTO customers (name, address) VALUES (\'Infosys Pvt. Ltd.\', \'Noida, NH-12 E-W\')')
// executeQuery('INSERT INTO customers (name, address) VALUES (\'IBM Pvt. Ltd.\', \'Bengluru, NH-112 E-W\')')

//------------------------------------Inserting multiple resords------------------------------------
// const values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1']
// ]
// const queryString = 'INSERT INTO customers (name, address) VALUES ?'
// executeQuery(queryString, [values])

//------------------------------------Update the table------------------------------------
// executeQuery('SELECT * FROM customers WHERE id = 5')
// executeQuery('UPDATE customers SET address = \'My New Address\' WHERE id = 5')
// executeQuery('SELECT * FROM customers WHERE id = 5')

//------------------------------------Delete records------------------------------------
// executeQuery('SELECT * FROM customers WHERE id = 11')
// executeQuery('DELETE FROM customers  WHERE id = 11')
// executeQuery('SELECT * FROM customers WHERE id = 11')


//------------------------------------Showing the table.------------------------------------
// executeQuery('SELECT * FROM customers')
// executeQuery('SHOW COLUMNS FROM customers')
//-- With WHERE clause
// executeQuery('SELECT * FROM customers WHERE id>8')


//------------------------------------Drop the table and db------------------------------------
// executeQuery('DROP TABLE customers')
// executeQuery('DROP DATABASE mydb')