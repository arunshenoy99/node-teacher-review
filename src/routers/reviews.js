const express = require('express')
const Filter = require('bad-words')
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
        if (reviewData.username === '') {
            reviewData.username = "Anon"
        }
        const filter = new Filter()
        const saveableReview = {
            name: filter.clean(reviewData.username),
            text: filter.clean(reviewData.review),
            rating: parseInt(reviewData.ratings),
            teacher: id
        }
        const review = new Review(saveableReview)
        await review.save()
        res.status(201).send(review)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router