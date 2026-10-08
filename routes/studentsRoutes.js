import * as studentscontroller from '../controllers/studentscontrollers.js'

import express from 'express';

const studentsrouter = express.Router();
studentsrouter.get('/all', studentscontroller.fetchAllstudents);
studentsrouter.post('/', studentscontroller.createstudents);

export default studentsrouter;