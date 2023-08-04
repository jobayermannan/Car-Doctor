import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },{
          path:"login",
          element: <Login></Login>
        },{
          path:'signup',
          element:<SignUp></SignUp>
        },{
          path:"checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
          loader:({params}) =>fetch (`https://car-doctor-server-jobayermannan.vercel.app/services/${params.id}`)
        },
         {
           path:"bookings",
           element:<PrivateRoute><Booking></Booking></PrivateRoute>
         }
        
      ]
    },
  ]);

  export default router;