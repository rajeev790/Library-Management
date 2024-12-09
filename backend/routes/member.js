const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// View available books
router.get('/books', async (req, res) => {
    const books = await Book.find({ status: 'AVAILABLE' });
    res.json(books);
});

// Borrow a book
router.post('/borrow/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book || book.status !== 'AVAILABLE') return res.status(400).send('Book not available');

    book.status = 'BORROWED';
    await book.save();
    res.send('Book borrowed');
});

// Return a book
router.post('/return/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book || book.status !== 'BORROWED') return res.status(400).send('Book not borrowed');

    book.status = 'AVAILABLE';
    await book.save();
    res.send('Book returned');
});

// Delete own account
router.delete('/account', async (req, res) => {
    await User.findByIdAndDelete(req.user.id);
    res.send('Account deleted');
});

module.exports = router;