  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    username: '',
    email: '',
    password: '',
    dob: '',
  };

  export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
      updateSignupForm: (state, action) => {
        return { ...state, ...action.payload };
      },
      resetSignupForm: () => {
        return { ...initialState };
      },
    },
  });

  export const { updateSignupForm, resetSignupForm } = signupSlice.actions;

  export default signupSlice.reducer;