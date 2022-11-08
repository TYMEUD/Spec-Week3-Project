import React from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'

const HomeScreen = () => { 
  const [recipes, setRecipes]= useState([])
  const getRecipes = () => {
      axios.get('https://recipes.devmountain.com/recipes')
      .then (res => {
        console.log(res.data)
        setRecipes(res.data)
      })
  }
  useEffect(getRecipes,[])
  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default HomeScreen