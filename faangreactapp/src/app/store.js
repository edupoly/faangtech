import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todolistSlice";
import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipesApi } from "../services/recipes";
import { moviesApi } from "../services/movies";
import { theatresApi } from "../services/theatres";
import { movieTheatresApi } from "../services/movieTheatres";
import { tasksApi } from "../services/tasks";
export const store = configureStore({
  reducer: {
    cntR: counterReducer,
    todoR: todoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [theatresApi.reducerPath]: theatresApi.reducer,
    [movieTheatresApi.reducerPath]: movieTheatresApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      recipesApi.middleware,
      moviesApi.middleware,
      theatresApi.middleware,
      movieTheatresApi.middleware
    ),
});
setupListeners(store.dispatch);
