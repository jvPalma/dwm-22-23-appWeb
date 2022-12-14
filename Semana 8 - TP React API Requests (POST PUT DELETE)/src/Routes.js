import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import PostPage from "./PostPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/post/:batata",
    element: <PostPage />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
