import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    const arrowButton=<>
         <div className="absolute h-full flex items-center   left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0) rounded-2xl">
      <div className='text-white space-y-7 w-1/2 pl-8'>
        <h1 className='text-6xl font-bold'>Affordable Price for car Servicing</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam iure laboriosam eos reiciendis quas sunt fuga asperiores voluptates natus.</p>
        <div>
        <button className="btn btn-active btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-accent">Latest Projects</button>  
        </div>
      </div>
    </div>
    </>

  const sharedClasses = "w-full rounded-2xl";
    return (
        <div>
         <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className={ sharedClasses} />
    {arrowButton}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle bg-red-500 mr-6">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2}className={ sharedClasses} />
    {arrowButton}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle bg-red-500 mr-6">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className={ sharedClasses} />
    {arrowButton}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle bg-red-500 mr-6">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className={ sharedClasses}/>
    {arrowButton}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle bg-red-500 mr-6">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-500">❯</a>
    </div>
  </div>
</div>   
        </div>
    );
};

export default Banner;