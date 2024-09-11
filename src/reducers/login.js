import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateloginForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetLoginForm: () => {
      return { ...initialState };
    },
  },
});

export const { updateloginForm, resetLoginForm } = loginSlice.actions;

export default loginSlice.reducer; // Corrected export
