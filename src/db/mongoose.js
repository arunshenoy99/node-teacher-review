const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/teacher-review`, {
    useNewUrlParser: true,
    useCreateIndex: true,
})