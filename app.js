const express = require('express')
const app = express()
const mongoose = require('./db/connectDB')

const web = require('./routes/web')
// const path = require('path')

app.set('view engine', 'ejs')
// app.use('/',express.static(path.join(__dirname, 'public')))
// app.use('/edit',express.static(path.join(__dirname, 'public')))

//ese b likh skte h
// app.use('/',express.static( 'public'))
// app.use('/edit',express.static( 'public'))

app.use(express.urlencoded({extended:false}))

app.use('/', web)

app.listen(4000, ()=>{
    console.log('listening 4000');
})