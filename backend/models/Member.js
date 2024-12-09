const mongoose = require('mongoose');
const User = require('./User '); // Import the User model

const memberSchema = new mongoose.Schema({
    // Inherit from User model
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    // Additional fields specific to Members can be added here
});

module.exports = mongoose.model('Member', memberSchema);