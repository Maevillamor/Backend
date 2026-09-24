import * as studentsservices from  '../services/studentsservices.js';

export const fetchAllstudents = async (req, res) =>{
    const students =await studentsservices.fetchAllstudents();
    res.status(200).json(students);
};
