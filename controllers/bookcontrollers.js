import * as bookservices from '../services/bookservices.js';

export const fetchAllBooks = async (req, res) =>{
    const book =await bookservices.fetchAllBooks();
    res.status(200).json(book);
};

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
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}