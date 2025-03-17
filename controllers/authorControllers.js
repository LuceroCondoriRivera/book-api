const { findAuthor } = require('../models/authorsModel');


const handleAuthorsRequest = (authorName) => {

    return findAuthor(authorName);
};

module.exports = { handleAuthorsRequest };