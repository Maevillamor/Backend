import pool from '../config/db.js';

export const fetchAllstudents = async () => {
  const [rows] = await pool.query('SELECT * FROM students');
  return rows;
};

//insert
export const insert = async (students) =>{
  const[result] = await pool.query(
    "INSERT INTO students (name,srcode, program) VALUES (?,?,?)",
    [students.name, students.srcode, students.program]
  );

return result.insertId;
}


