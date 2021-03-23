import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/postsfeed/postsFeedSlice";

const reducer = {
  posts: postsSlice,
};

export const store = configureStore({ reducer });
