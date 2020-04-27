const express = require('express')
const path = require('path')
const hbs = require('hbs')

require('./db/mongoose')
const teacherRouter = require('./routers/teachers')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
app.use(express.static(publicPath))
app.use(teacherRouter)

app.get('', (req, res) => {
    res.send('Hello')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})