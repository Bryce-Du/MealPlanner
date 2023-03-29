import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
}

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${userId}`);
      const userData = await response.json();
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'user/editUser',
  async ({ id, editedUserData }, { rejectWithValue }) => {
    try {
      const jwt = JSON.parse(localStorage.getItem('user')).token
      const response = await fetch(`http://localhost:4000/api/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify(editedUserData)
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})

export default userSlice.reducer