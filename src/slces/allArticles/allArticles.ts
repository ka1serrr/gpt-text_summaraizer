import { IArticle } from '@/common.types';
import { IAllArticles } from './allArtilces.types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IAllArticles = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<IArticle>) {
      state.articles.push(action.payload);
    },
  },
});

export const { addArticle } = articlesSlice.actions;
