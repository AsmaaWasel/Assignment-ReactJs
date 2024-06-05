import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/post";

/**
 * Define a type for the slice state
 */
interface PostsState {
  posts: Post[]; // Array of posts
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  selectedPost: Post | null; // Currently selected post, or null if none selected
  searchQuery: string; // Search query string
}

/**
 * Define the initial state using that type
 */
const initialState: PostsState = {
  posts: [], // Initialize posts array as empty
  currentPage: 1, // Initialize current page as 1
  totalPages: 1, // Initialize total pages as 1
  selectedPost: null, // Initialize selected post as null
  searchQuery: "", // Initialize search query as empty string
};

/**
 * Asynchronous thunk to fetch posts from an API
 */
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const totalCount = response.headers.get("X-Total-Count");
    return {
      posts: await response.json(),
      totalPages: Math.ceil(Number(totalCount) / 10),
    };
  }
);

/**
 * Redux slice for managing posts
 */
const postsSlice = createSlice({
  name: "posts", // Slice name
  initialState, // Initial state
  reducers: {
    /**
     * Redux action to set the current page
     */
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    /**
     * Redux action to set the selected post
     */
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
    /**
     * Redux action to set the search query
     */
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * Redux reducer case for handling fetchPosts fulfilled action
     */
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      state.totalPages = action.payload.totalPages;
    });
  },
});

// Export redux actions
export const { setCurrentPage, setSelectedPost, setSearchQuery } =
  postsSlice.actions;

// Export redux reducer
export default postsSlice.reducer;
