import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user,loading} =useContext(AuthContext);
    const [bookings,setBookings] =useState([])
    


    const url =  `http://localhost:5000/bookings?email=${user?.email}` 
    

    useEffect(()=>{
        
        if (!user?.email)return 
        
        fetch(url).then((res)=>res.json()).then((data)=>{
            
            setBookings(data)
            ;})

     },[user])

     if(loading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
           

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Email</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings.map(booking => <BookingRow key={booking._id} setBookings={setBookings} bookings={bookings} booking={booking}></BookingRow>)
     }
      
    
     
      
    </tbody>
  
    
  </table>
</div> 
        </div>
    );
};

export default Booking;