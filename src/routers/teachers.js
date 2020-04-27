const express = require('express')

const Teacher = require('../models/teacher')

const router = new express.Router()

router.get('/teachers', async (req, res) => {
    const teachers = await Teacher.find({})
})

router.get('/departments/:department/teachers', async (req, res) => {
    const department = req.params.department
    try {
        const teachers = await Teacher.find({ department })
        if (teachers.length === 0) {
            return res.status(404).send()
        }
        res.send(teachers)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router