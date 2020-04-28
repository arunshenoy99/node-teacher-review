const express = require('express')

const Teacher = require('../models/teacher')

const router = new express.Router()

router.get('/teachers', async (req, res) => {
    try {
        const teachers = await Teacher.find( { } )
        if (teachers.length === 0) {
            res.status(404).send()
        }
        res.render('department', {
            title: teachers[0].department,
            teachers
        })
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/departments/:department/teachers', async (req, res) => {
    const department = req.params.department
    try {
        const teachers = await Teacher.find({ department })
        if (teachers.length === 0) {
            return res.status(404).send()
        }
        res.render('department', {
            title: teachers[0].department,
            teachers
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/teachers/:id', async(req, res) => {
    
})

module.exports = router