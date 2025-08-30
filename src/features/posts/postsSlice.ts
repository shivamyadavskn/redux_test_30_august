import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../services/api";
import { Post, NewPost, PostsState } from "./postsTypes";

// GET request
export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const response = await api.get<Post[]>("/posts");
    return response.data;
  }
);

// POST request
export const createPost = createAsyncThunk<Post, NewPost>(
  "posts/createPost",
  async (newPost) => {
    const response = await api.post<Post>("/posts", newPost);
    return response.data;
  }
);

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchPosts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });

    // createPost
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create post";
      });
  },
});

export default postsSlice.reducer;
