import * as studentsmodel from '../models/studentsmodel.js';

export const fetchAllstudents = async () => {
   const students = await studentsmodel.fetchAllstudents();
  return students;
};