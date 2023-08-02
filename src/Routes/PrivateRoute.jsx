// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';

// const PrivateRoute = ({children}) => {

//     const {user,loading} =useState(AuthContext)
//    if(loading){
//     return  
//    }
    

//     if(user?.email){
//         return children
//     }



//     return <Navigate to="/bookings" replace></Navigate>
// };

// export default PrivateRoute;