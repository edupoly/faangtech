// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const theatresApi = createApi({
  reducerPath: "theatresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/theatres" }),
  endpoints: (builder) => ({
    addNewTheatre: builder.mutation({
      query: (theatre) => ({
        url: `/`,
        method: "POST",
        body: JSON.stringify(theatre),
      }),
    }),
    getAllTheatres: builder.query({
      query: () => `/?delay=1000`,
    }),
    getTheatreById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddNewTheatreMutation,
  useGetAllTheatresQuery,
  useLazyGetAllTheatresQuery,
  useGetTheatreByIdQuery,
} = theatresApi;
