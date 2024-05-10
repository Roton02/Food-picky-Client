import {
    createBrowserRouter,
  } from "react-router-dom";
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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/addFood',
          element: <AddFood></AddFood>
        },
        {
          path :'/availFood',
          element: <AvailFood></AvailFood>
        },
        {
          path:'/ManageMyFoods',
          element:<ManageMyFoods></ManageMyFoods>
        },
        {
          path:'/MyFoodRequest',
          element:<MyFoodRequest></MyFoodRequest>
        },
        {
          path:'/contract',
          element:<Contract></Contract>
        }
      ]
    },
  ]);

  export default router;