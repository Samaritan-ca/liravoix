const express = require('express');
const router = express.Router();
const { getBookDetails, getBookPage, getAllBooks } = require('../controllers/bookController');

router.get('/', getAllBooks);  
//router.get('/book', getBookDetails);     
router.get('/:book_id/pages/:page_number', getBookPage);


module.exports = router;
