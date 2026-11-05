import * as bookmodel from '../models/bookmodels.js';
import ValidationError from '../utils/ValidationError.js';

export const fetchAllBooks = async () => {
   const books = await bookmodel.fetchAllBooks();
  return books;
};


//validation
const doesBookExist = async (book) =>{
  let existing;
  if(Object.hasOwn(book,"id")){
      existing = await bookmodel.findbookByid(book.id); //for update

  }else{
      existing = await bookmodel.findbookByNameAndAuthor(book); //for create
  }

 if (existing.length > 0) {
  return true;
 }
  return false;
}

//insert
export const createbook = async (book) => {
  if(!book.name || !book.author){
    throw new ValidationError(404, "Name and Author is required!");
  }

   const existing = await doesBookExist(book);
   
   if(existing){
    throw new ValidationError(404, 'Book already exists!');
   }

  const bookId = await bookmodel.insert(book);
  return bookId;
}


//update
export const updatebook = async (book) => {
  if(!book.name || !book.author){
    throw new ValidationError(404, "Name and Author is required!");
  }

const existing = await doesBookExist(book);
   
   if(!existing){
    throw new ValidationError(404, 'Book does not exist!');
   }

  const updatedbook = await bookmodel.update(book);
  return updatedbook;
}


//delete
export const deletebook = async(id) => {

  const existing = await doesBookExist({id});
   
   if(!existing){
    throw new ValidationError(404, 'Book does not exist!');
   }

  const deletedbook = await bookmodel.remove(id);
  return deletedbook;
}
