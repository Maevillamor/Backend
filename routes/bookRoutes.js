import * as bookcontroller from '../controllers/bookcontrollers.js';
import express from 'express';

const bookrouter = express.Router();

bookrouter.get('/all', bookcontroller.fetchAllBooks);
bookrouter.post('/', bookcontroller.createbook);
export default bookrouter;

