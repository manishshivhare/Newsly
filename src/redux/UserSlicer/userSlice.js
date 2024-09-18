import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCategory: (state, category) => {
      state.category = category;
    },
  },
});

export const { setCategory } = userSlice.actions;

export default userSlice.reducer;
