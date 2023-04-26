import React from 'react';

function IngredientUpdate(props) {
  // const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value)
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

export default IngredientUpdate;