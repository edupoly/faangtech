// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const tasksApi = createApi({
  reducerPath: "theatresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/tasks" }),
  endpoints: (builder) => ({
    addNewTask: builder.mutation({
      query: (task) => ({
        url: `/`,
        method: "POST",
        body: JSON.stringify(task),
      }),
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/${task.id}`,
        method: "PUT",
        body: JSON.stringify(task),
      }),
    }),
    getAllTasks: builder.query({
      query: () => `/?delay=1000`,
    }),
    getTaskById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddNewTaskMutation,
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useLazyGetAllTasksQuery,
  useUpdateTaskMutation,
} = tasksApi;
