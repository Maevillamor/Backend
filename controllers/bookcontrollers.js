import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async (req, res) =>{
    const book =await bookservices.fetchAllBooks();
    res.status(200).json(book);
};