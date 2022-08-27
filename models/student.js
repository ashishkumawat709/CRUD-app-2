const mongoose = require('../db/connectDB')

const StudentSchema = new mongoose.Schema({
    name:{type:String, required:true,},
    age:{type:Number, required:true,},
    course:{type:String, required:true,}
})

const StudentModel = new mongoose.model('StudentData', StudentSchema)

module.exports = StudentModel