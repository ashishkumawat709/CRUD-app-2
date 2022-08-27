const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mySchool')
.then(()=>{
    console.log('connected with db');
})
.catch((err)=>{
    console.log(err);
})

module.exports = mongoose