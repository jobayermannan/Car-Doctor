import React from 'react';

const BookingRow = ({booking,setBookings,bookings}) => {

    const {_id,img,email,date,customerName,price,service} =booking;

    const handleDelete=id=>{
       console.log(id)
       const proceed=confirm('Are you sure you want to delete');
       if(proceed){
         fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE',

         }).then(res=>res.json()).then(data=>{console.log(data)
        if(data.deletedCount>0){
            alert('you have successfully deleted')
            const remaining = bookings.filter(b=>b._id !== id);
            setBookings(remaining)
        }});
       }
    }


    return (
        
             <tr>
        <th>
            <label>  <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle bg-red-600">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></label>
           

        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                    img && <img src={ img } alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {service}
          <br/>
         
        </td>
        <td>
          {email}
          <br/>
         
        </td>
        <td>
            ${price}
            </td>
        <td>
        {date && <span>{date}</span>}
        </td>
       
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> 
       
    );
};

export default BookingRow;