import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserPantryById } from './pantrySlice';
import AddIngredientForm from './AddIngredientForm';
import IngredientCard from './IngredientCard';


function PantryList(props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { ingredients } = useSelector((state) => state.pantry)
  useEffect(() => {
    dispatch(getUserPantryById(id))
  }, [dispatch, id])

  return (
    <div>
      <AddIngredientForm />
      {ingredients.map((ingredient) => {
        return <IngredientCard name={ingredient.name} quantity={ingredient.quantity} />
      })}
    </div>
  );
}

export default PantryList;