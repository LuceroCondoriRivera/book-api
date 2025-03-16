const fs = require('fs');
const path = require('path');
const publishersPath = path.join(__dirname, '../data/publishers.json');

function getPublishers() {
    const data = fs.readFileSync(publishersPath);
    return JSON.parse(data);
}

function addPublisher(publisher) {
    const publishers = getPublishers();
    publishers.push(publisher);
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));
}

module.exports = { getPublishers, addPublisher };