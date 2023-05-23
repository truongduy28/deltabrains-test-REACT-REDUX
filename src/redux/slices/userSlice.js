import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("user") === null ||
  JSON.parse(localStorage.getItem("user")) === null
    ? { email: "" }
    : { email: JSON.parse(localStorage.getItem("user")).email };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.email = "";
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
