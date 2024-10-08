import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../pages/ErrorePage/ErrorPage";
import AddFood from "../pages/AddFood/AddFood";
import AvailFood from "../pages/AvailFood/AvailFood";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import Contract from "../Shared/Contract/Contract";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SinglePage from "../pages/singlePage/SinglePage";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Blogs from "../pages/Blogs/Blogs";
import Reviews from "../pages/Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Users from "../AdminAccesable/Users/Users";
import AllFood from "../AdminAccesable/AllFood/AllFood";
import AllRequested from "../AdminAccesable/AllRequestedFood/AllRequested";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/availFood",
        element: <AvailFood></AvailFood>,
      },
      {
        path: "/ManageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/MyFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/AllFoodRequest",
        element: (
          <PrivateRoute>
            <AllRequested></AllRequested>
          </PrivateRoute>
        ),
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:idMeal",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/singlePage/:id",
        element: (
          <PrivateRoute>
            <SinglePage></SinglePage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/featured/${params.id}`),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/Users",
        element: <Users></Users>,
      },
     
      {
        path: "/Admin/allFood",
        element: <AllFood></AllFood>,
      },
     
    ],
  },
]);

export default router;
