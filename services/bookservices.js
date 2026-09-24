import * as bookmodel from '../models/bookmodels.js';


export const fetchAllBooks = async () => {
   const books = await bookmodel.fetchAllBooks();
  return books;
};