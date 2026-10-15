import * as studentsservices from  '../services/studentsservices.js';

export const fetchAllstudents = async (req, res) =>{
    const students =await studentsservices.fetchAllstudents();
    res.status(200).json(students);
};

//create
export const createstudents = async (req, res) => {
    const {name, srcode, program} = req.body;
    const students = {name, srcode, program};

    try{
        const studentsId = await studentsservices.createstudents(students);
        res.status(200).json({
            success: true,
            message: studentsId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

//editstudents
export const editstudents = async (req, res) => {
    const {name, srcode, program} = req.body;
    const { id } = req.params;
    const students = {id: parseInt(id), name, srcode, program};


    try{
        const updatedstudents = await studentsservices.updatestudents(students);
        res.status(200).json({
            success: true,
            message: updatedstudents
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}