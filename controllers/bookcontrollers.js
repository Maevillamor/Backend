import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async (req, res) =>{
    const book =await bookservices.fetchAllBooks();
    res.status(200).json(book);
};

//createbook
export const createbook = async (req,res) => {
    const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookservices.createbook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}

//editbook
export const editbook = async (req, res) => {
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id: parseInt(id), name, author};


    try{
        const updatedbook = await bookservices.updatebook(book);
        res.status(200).json({
            success: true,
            message: updatedbook
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message 
        });
    }
}

//delete
export const deletebook = async (req, res) => {
    const { id } = req.params;
   
    try{
        const deletedbook = await bookservices.deletebook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedbook
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}