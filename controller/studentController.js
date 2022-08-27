const StudentModel = require('../models/student')

class studentController{
    static createDoc = async(req,res)=>{
        try {
            const student = new StudentModel({
                name:req.body.name,
                age:req.body.age,
                course:req.body.course,
            })
         const result =    await student.save();
            res.redirect('/')
            console.log(result);
        } catch (error) {
            console.log(error);
        }      
    }

    static getDoc = async(req,res)=>{
        try {
            const result = await StudentModel.find()
            res.render('index', {data:result})
        } catch (error) {
            console.log(error);
        }
    }

    static updateDoc = async(req,res)=>{
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async(req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            console.log(result);
            res.render('edit', {data:result})
        } catch (error) {
            console.log(error);
        }
    }   


    static deleteDoc = async(req,res)=>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    } 
}

module.exports= studentController