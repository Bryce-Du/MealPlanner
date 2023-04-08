const Ingredient = require('../models/ingredientModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

//pantry
const getPantry = async (req, res) => {
  const userId = await User.findOne({ _id: req.params.id })
  const pantry = await Ingredient.find({ user: userId })
  res.status(200).json(pantry)
}

//addIngredient
const addIngredient = async (req, res) => {
  console.log(req.params)
  const ingredient = new Ingredient({
    name: req.body.name,
    quantity: req.body.quantity,
    user: req.params.id
  });
  await ingredient.save();
  res.status(200).json(ingredient)
}

//editIngredient
const editIngredient = async (req, res) => {
  console.log(req.params)
}

module.exports = {
  addIngredient,
  getPantry
}