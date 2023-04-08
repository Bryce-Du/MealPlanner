import React from 'react';

function IngredientCard({ name, quantity }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{quantity}</p>
    </div>
  );
}

export default IngredientCard;