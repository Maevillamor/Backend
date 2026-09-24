import * as bookcontroller from '../controllers/bookcontrollers.js';
import express from 'express';

const bookrouter = express.Router();

bookrouter.get('/all', bookcontroller.fetchAllBooks);

export default bookrouter;