const express = require('express')
const { getPantry, addIngredient } = require('../controllers/PantryController')
const router = express.Router()

router.get('/:id', getPantry)

router.post('/:id', addIngredient)

module.exports = router