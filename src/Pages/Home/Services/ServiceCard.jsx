import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{_id,title,img,description,price}=service
    return (
        <div>
            <div className="card w-78 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-64 h-48" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title"> Service:{title}</h2>
    {/* <p>{description.length > 100
        ? description.slice(0, 100) + "..."
        : description}</p> */}
        <p className='font-semibold text-lg' > Price: <span className='ml-2 text-orange-700'>{price}</span></p>
    <div className="card-actions">
      <Link to={`/checkout/${_id}`}>  <button className="btn btn-primary"> Book Now</button></Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;