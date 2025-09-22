// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const movieTheatresApi = createApi({
  reducerPath: "movieTheatresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/movieTheatres" }),
  endpoints: (builder) => ({
    addMovieToTheatres: builder.mutation({
      query: (movieTheatres) => ({
        url: `/`,
        method: "POST",
        body: JSON.stringify(movieTheatres),
      }),
    }),
    getMovieTheatresByMovieId: builder.query({
      query: (movieid) => `/?movieId=${movieid}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddMovieToTheatresMutation,
  useGetMovieTheatresByMovieIdQuery,
} = movieTheatresApi;
