import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const {user,loading} =useContext(AuthContext);
    const [bookings,setBookings] =useState([])
    const navigate= useNavigate();
    


    const url =  `https://car-doctor-server-jobayermannan.vercel.app/bookings?email=${user?.email}` 
    

    useEffect(()=>{
        
        // if (!user?.email)return 
        
        fetch(url,{
          method: 'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem('car-token')}`
          },
          
        }).then((res)=>res.json()).then((data)=>{
               if(!data.error){
                setBookings(data)
               }
               else {
                  navigate('/')
               }
          
            ;})

     },[url])

    //  if(loading){
    //     return <progress className="progress w-56"></progress>
    // }
    return (
        <div>
           
        <h2> booking: {bookings.length}</h2>
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