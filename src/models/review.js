const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 1
    },
    text: {
        type: String,
        trim: true,
        minlength:1,
        required: true
    },
    rating: {
        type: Number,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Teacher'
    }
})

const review = mongoose.model('Review', reviewSchema)

module.exports = review