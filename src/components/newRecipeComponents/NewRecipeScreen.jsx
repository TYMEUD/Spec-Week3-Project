import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients]= useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
};

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values) => {
  values.ingredients = ingredients;
  console.log(values);
};
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}/>
    {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
        <input 
          placeholder="Title your Recipe!"
          value={values.recipeName}
          onChange={handleChange}
          name="recipeName" type="text" />
        <input type="text"
           placeholder="Image"
           value={values.imageURL}
           onChange={handleChange}
           name="imageURL"/>
        <input type="text" 
          placeholder="Prep time"
          value={values.prepTime}
          onChange={handleChange}
          name="prepTime"/>
        <input type="text" 
          placeholder="Cook Time"
          value={values.cookTime}
          onChange={handleChange}
          name="cookTime"/>
        <input type="text" 
          placeholder="Servings"
          value={values.serves}
          onChange={handleChange}
          name="serves"/>
        <input type="text" 
          placeholder="Indgredients"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="ingredients"/>
        <input type="text" 
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          name="quantity"/>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Cook</button>
        <button>Bake</button>
        <button>Drink</button>
      </form>
     </section>
  );
};

export default NewRecipeScreen;
