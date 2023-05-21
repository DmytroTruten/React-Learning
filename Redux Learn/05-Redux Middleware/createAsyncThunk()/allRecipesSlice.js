import { fetchRecipes } from '../../app/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const loadRecipes = createAsyncThunk(
  "allRecipes/loadRecipes",
  async () => {
    const data = await fetchRecipes();
    const result = await data.json()
    return result
  }
);


export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;
