import * as studentsmodel from '../models/studentsmodel.js';

export const fetchAllstudents = async () => {
   const students = await studentsmodel.fetchAllstudents();
  return students;
};

export const createstudents = async (students) => {
  const studentsId = await studentsmodel.insert(students);
  return studentsId;
}