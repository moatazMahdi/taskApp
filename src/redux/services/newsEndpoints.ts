import { newsApi } from './newsApi';

export const newsEndpoints = newsApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: (queryParams) => `top-headlines?${queryParams}&apiKey=96fb1c0a4f894c418b2c151ff96bb11f`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsEndpoints;
