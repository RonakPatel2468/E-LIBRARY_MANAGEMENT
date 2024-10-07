const express = require('express');
const { createBook, getBooks, updateBook, deleteBook, borrowBook } = require('../controllers/bookController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(getBooks).post(protect, createBook);
router.route('/:id').put(protect, updateBook).delete(protect, deleteBook);
router.put('/:id/borrow', protect, borrowBook);

module.exports = router;
