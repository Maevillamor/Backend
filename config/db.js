import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host:  'localhost',
  user: 'admin',
  password: '',
  database: "librarydb"
});

export default pool;