import * as studentsmodel from '../models/studentsmodel.js';

export const fetchAllstudents = async () => {
   const students = await studentsmodel.fetchAllstudents();
  return students;
};

//insert
export const createstudents = async (students) => {
  const studentsId = await studentsmodel.insert(students);
  return studentsId;
}

//update
export const updatestudents = async (students) => {
  const updatedstudents = await studentsmodel.update(students);
  return updatedstudents;
}

//delete
export const deletestudents = async(id) => {
  const deletedstudents = await studentsmodel.remove(id);
  return deletedstudents;
}