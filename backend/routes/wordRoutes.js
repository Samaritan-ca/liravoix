const express = require('express');
const router = express.Router();
const { addWord, getWords} = require('../controllers/wordController');

router.get('/display', getWords);    
router.post('/add', addWord);       


module.exports = router;
