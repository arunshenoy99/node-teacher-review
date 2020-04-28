const express = require('express')
const Review = require('../models/review')
const Teacher = require('../models/teacher')

const router = new express.Router()


router.post('/reviews/:id', async (req, res) => {
    const id = req.params.id
    const reviewData = req.body
    try
    {
        const teacher = Teacher.findById(id)
        if (!teacher) {
            return res.status(404).send()
        }
        if (reviewData.name === '') {
            reviewData.name = "Anon"
        }
        const saveableReview = {
            name: reviewData.name,
            text: reviewData.review,
            rating: parseInt(reviewData.ratings),
            teacher: id
        }
        const review = new Review(saveableReview)
        await review.save()
        res.status(201).send()
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router