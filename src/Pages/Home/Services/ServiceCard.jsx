import React from 'react';

const ServiceCard = ({service}) => {
    const{title,img,description,price}=service
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
    <div className="card-actions">
      <button className="btn btn-primary"> Price:{price}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;