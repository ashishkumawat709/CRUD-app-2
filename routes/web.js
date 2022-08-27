const express = require('express')
const router = express.Router()
const studentController = require('../controller/studentController')


router.get('/', studentController.getDoc)
router.post('/', studentController.createDoc)
router.get('/edit/:id', studentController.editDoc)
router.post('/update/:id', studentController.updateDoc)
router.post('/delete/:id', studentController.deleteDoc)

module.exports = router