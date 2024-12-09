const express = require('express');
const Book = require('../models/Book');
const Member = require('../models/Member');
const router = express.Router();

// Add a new book
router.post('/books', async (req, res) => {
    const { title, author } = req.body;
    const book = new Book({ title, author, status: 'AVAILABLE' });
    await book.save();
    res.status(201).send('Book added');
});

// Update a book
router.put('/books/:id', async (req, res) => {
    const { title, author } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, author });
    res.send('Book updated');
});

// Remove a book
router.delete('/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book removed');
});

// Manage members
router.post('/members', async (req, res) => {
    const { username, password } = req.body;
    const member = new Member({ username, password });
    await member.save();
    res.status(201).send('Member added');
});

// Additional member management routes can be added here

module.exports = router;