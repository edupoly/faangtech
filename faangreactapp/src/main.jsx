import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../src/app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter.jsx";
import Todolist from "./features/todolist/Todolist.jsx";
import Products from "./features/products/Products.jsx";
import Recipes from "./features/recipes/Recipes.jsx";
import RecipeDetails from "./features/recipes/RecipeDetails.jsx";
import Movies from "./features/movies/Movies.jsx";
import MovieDetails from "./features/movies/MovieDetails.jsx";
import AddMovie from "./features/movies/AddMovie.jsx";
import EditMovie from "./features/movies/EditMovie.jsx";
import Theatres from "./features/theatres/Theatres.jsx";
import AddTheatre from "./features/theatres/AddTheatre.jsx";
import AddMovieToTheatres from "./features/movies/AddMovieToTheatres.jsx";
import TaskList from "./features/tasks/TaskList.jsx";
import EditTask from "./features/tasks/EditTask.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/editMovie/:id",
        element: <EditMovie></EditMovie>,
      },
      {
        path: "/theatres",
        element: <Theatres></Theatres>,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails></RecipeDetails>,
      },
      {
        path: "/addTheatre",
        element: <AddTheatre></AddTheatre>,
      },
      {
        path: "/addMovieToTheatres/:mid",
        element: <AddMovieToTheatres></AddMovieToTheatres>,
      },
      {
        path: "/tasklist",
        element: <TaskList></TaskList>,
      },
      {
        path: "/editTask/:id",
        element: <EditTask></EditTask>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
