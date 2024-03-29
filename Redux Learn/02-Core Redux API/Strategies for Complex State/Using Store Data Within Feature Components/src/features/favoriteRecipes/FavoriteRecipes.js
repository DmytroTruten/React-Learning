import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

import {removeRecipe} from './favoriteRecipesSlice.js'

export const FavoriteRecipes = (props) =>{
  
  const favoriteRecipes = props.favoriteRecipes;
  const dispatch = props.dispatch;
  
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe))
  };

  return (
    <div id='favorite-recipes' className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};