import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: false,
  nextPage: 0,
  loading: false,
  country: "in",
  language: "en",
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
    setLanguage: (state, language) => {
      state.language = language;
    },
    setCountry: (state, country) => {
      state.country = country;
    },
  },
});

export const { setCategory, setNextPage, setLoading, setCountry, setLanguage } =
  userSlice.actions;

export default userSlice.reducer;
