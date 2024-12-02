//require express
const express = require('express')
const { addContact, listContacts, getOneContact, updateContact, delContact } = require('../controllers/contact')

//router
const router = express.Router()

// test
router.get('/test', (req, res) => {
    res.status(200).json('The test route is functionnal')
})

//CRUD
// CREATE
router.post('/add', addContact);
//READ
router.get('/all', listContacts);
router.get('/:_id', getOneContact)
//UPDATE
router.put('/:_id', updateContact);
//DELETE
router.delete('/:_id', delContact)





// export of router
module.exports = router