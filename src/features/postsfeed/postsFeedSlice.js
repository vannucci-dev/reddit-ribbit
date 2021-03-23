import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const url = `https://www.reddit.com/top.json`;
      const data = await fetch(url);
      const json = await data.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload.data.children;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.articles = [];
      });
  },
});

export const selectPosts = (state) => state.posts.articles;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectError = (state) => state.posts.hasError;
export default postsSlice.reducer;
