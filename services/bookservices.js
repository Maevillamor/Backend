import * as bookmodels from '../models/bookmodels.js';

export const getAllBooks = async () => {
  return await bookmodels.getAllBooks();
};