import { fetchRecipes } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const loadRecipes = () => {
  return async (dispatch) => {
    const payload = await fetchRecipes();
    dispatch({ type: "allRecipes/addRecipes", payload: payload });
  };
};

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

export default allRecipesSlice.reducer;
