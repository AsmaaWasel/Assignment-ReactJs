import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";

// Configure the Redux store
const store = configureStore({
  // Define reducers for the store
  reducer: {
    posts: postsReducer, // Assign postsReducer to the 'posts' slice of the store
  },
});

// Define the type for the root state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

// Define the type for the dispatch function of the Redux store
export type AppDispatch = typeof store.dispatch;

// Export the Redux store
export default store;
