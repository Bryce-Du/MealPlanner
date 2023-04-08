import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
  status: 'idle',
  error: null
};

export const getUserPantryById = createAsyncThunk(
  'user/getUserPantryById',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/pantry/${userId}`);
      const userData = await response.json();
      console.log(userData)
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const pantrySlice = createSlice({
  name: 'pantry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserPantryById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserPantryById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ingredients = action.payload;
      })
      .addCase(getUserPantryById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default pantrySlice.reducer