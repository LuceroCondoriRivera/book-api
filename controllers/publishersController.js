const { getPublishers } = require('../models/publishersModel');

const handlePublishersRequest = () => {

    return getPublishers();
};

module.exports = { handlePublishersRequest };