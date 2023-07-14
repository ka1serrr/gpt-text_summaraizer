import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { options } from '@/options';
import { IArticle } from '@/common.types';


export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: options.baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', options.rapidAPiKey)
      headers.set('X-RapidAPI-Host', options.rapidApiHost)

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query<IArticle, {articleUrl: string}>({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  }) 
})

export const { useLazyGetSummaryQuery } = articleApi