import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/post";

// Define a type for the slice state
interface PostsState {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  selectedPost: Post | null;
  searchQuery: string;
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
  currentPage: 1,
  totalPages: 1,
  selectedPost: null,
  searchQuery: "",
};

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

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const { setCurrentPage, setSelectedPost, setSearchQuery } =
  postsSlice.actions;

export default postsSlice.reducer;
