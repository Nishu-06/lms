import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
