const express = require('express')
const {
  getPantry,
  addIngredient,
  editIngredient
} = require('../controllers/PantryController')
const router = express.Router()

router.get('/:id', getPantry)

router.post('/:id', addIngredient)

router.patch('/:id/edit', editIngredient)

module.exports = router