const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let BooksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Array, required: true },
    image: String,
    synopsis: String,
    date: { type: Date, default: Date.now }
});

/** @name db.Books */
module.exports = mongoose.model('Books', BooksSchema);
