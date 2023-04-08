import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [{
  ingredient: null,
  status: 'idle',
  error: null
}];

export const getUserPantryById = createAsyncThunk(
  'user/getUserPantryById',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${userId}/pantry`);
      const userData = await response.json();
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
  extraReducers: {}
});

export default pantrySlice.reducer