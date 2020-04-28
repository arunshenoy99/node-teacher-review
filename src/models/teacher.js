const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    qualification: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    position: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    department: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
}, {
    timestamps: true
})

teacherSchema.virtual('reviews', {
    foreignField: 'teacher',
    localField: '_id',
    ref: 'Review'
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher