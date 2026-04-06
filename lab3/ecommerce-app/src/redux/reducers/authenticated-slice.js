import { createSlice } from "@reduxjs/toolkit";

const AuthenticatedSlice = createSlice({
  name: "authenticated",
  initialState: { authenticated: false },
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    }
  }
});

export const { setAuthenticated } = AuthenticatedSlice.actions;
export default AuthenticatedSlice.reducer;