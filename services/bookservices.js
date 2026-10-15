import * as bookmodel from '../models/bookmodels.js';


export const fetchAllBooks = async () => {
   const books = await bookmodel.fetchAllBooks();
  return books;
};

//insert
export const createbook = async (book) => {
  const bookId = await bookmodel.insert(book);
  return bookId;
}

//update
export const updatebook = async (book) => {
  const updatedbook = await bookmodel.update(book);
  return updatedbook;
}

//delete
export const deletebook = async(id) => {
  const deletedbook = await bookmodel.remove(id);
  return deletedbook;
}
