import React from 'react';
import img from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2  relative'>
    <img src={img} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={img2} className="w-1/2 absolute top-1/2 right-5 border-8 border-white rounded-lg shadow-2xl" />
    </div>
   
    <div className='lg:w-1/2 space-y-5'>
        <h2 className='text-orange-500 text-4xl text-semibold'>About</h2>
      <h1 className="text-5xl font-bold text-red-100">We are Qualified and Accountable to our Service </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;