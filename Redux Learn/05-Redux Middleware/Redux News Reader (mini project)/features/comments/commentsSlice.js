import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCommentsForArticleId = createAsyncThunk(
  "commentsSlice/loadCommentsForArticleId",
  async (id) => {
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    return json;
  }
);

export const postCommentForArticleId = createAsyncThunk(
  "commentsSlice/postCommentsForArticleId",
  async ({ articleId, comment }) => {
    const requestBody = JSON.stringify({ comment });
    const response = await fetch(`api/articles/${articleId}/comments`, {
      method: "POST",
      body: requestBody,
    });
    const json = await response.json();
    return json;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
    createCommentIsPending: false,
    failedToCreateComment: false,
  },
  extraReducers: {
    [loadCommentsForArticleId.pending]: (state, action) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      state.byArticleId = action.payload;
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.rejected]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    },
    [postCommentForArticleId.pending]: (state, action) => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.fulfilled]: (state, action) => {
      state.byArticleId = action.payload;
      state.createCommentIsPending = false;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.rejected]: (state, action) => {
      state.createCommentIsPending = false;
      state.ailedToCreateComment = true;
    },
  },
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) =>
  state.comments.createCommentIsPending;

export default commentsSlice.reducer;
