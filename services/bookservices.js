import * as bookmodel from '../models/bookmodels.js';


export const fetchAllBooks = async () => {
   const books = await bookmodel.fetchAllBooks();
  return books;
};


export const createbook = async (book) => {
  const bookId = await bookmodel.insert(book);
  return bookId;
}