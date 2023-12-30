import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Test01 from "../pages/day01/test";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/day01", element: <Test01 /> },
]);

export default router;
