import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {
    const services= useLoaderData()
    const {title,price,_id,img}=services;
    const {user} =useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const email =user?.email;
        const date= form.date.value;
       

        const booking={
            customerName:name,
            email,
            img,
            date,
            service: title,
            service_id:_id,
             price:price
        }
        console.log(booking);
       
       fetch('https://car-doctor-server-jobayermannan.vercel.app/bookings',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(booking)
       }).then((response) => response.json()).then((data)=>{console.log(data)
    if(data.insertedId){
        alert('Booking successfully updated')
    }});
    }
    return (
        <div>
            <h2 className='text-center font-bold text-orange-600 text-xl'>   <span>Book service</span> - <span className=''>{title}</span>     </h2>
            <div>
   
   
      <form onSubmit={handleSubmit}  >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className="form-control">
          <label  className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" />
     
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amoundt</span>
          </label>
          <input type="text" name="price"  defaultValue={'$' + price} className="input input-bordered" />
    
        </div>
      </div>
        <div className="form-control mt-6">
        
          <input type="submit" value="Confirm" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  </div>

         
    );
};

export default Checkout;