import React, { useState } from 'react';

function AddIngredientForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <div>
      <input onChange={handleChange} placeholder={'Search'} type={'search'} value={searchTerm}></input>
      <button onClick={handleSubmit}>Search for Item</button>
    </div>
  );
}

export default AddIngredientForm;