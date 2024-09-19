import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: false,
  nextPage: 0,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCategory: (state, category) => {
      state.category = category;
    },
    setNextPage: (state, nextPage) => {
      state.nextPage = nextPage;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    },
  },
});

export const { setCategory, setNextPage, setLoading } = userSlice.actions;

export default userSlice.reducer;
