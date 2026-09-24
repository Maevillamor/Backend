import * as studentscontroller from '../controllers/studentscontrollers.js'

import express from 'express';

const studentsrouter = express.Router();
studentsrouter.get('/all', studentscontroller.fetchAllstudents);


export default studentsrouter;