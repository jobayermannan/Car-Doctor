import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} =useContext(AuthContext)
    const handleSignUp=event =>{
        event.preventDefault();
        const form=event.target;
        const name =form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
           
        createUser(email,password).then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        }).catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        });

    }
    return (
        <div>
                <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col-reverse lg:flex-row">
    <div className=" mr-4">
      
      <img src={img}></img>
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl text-center font-bold">SingUp now!</h1>
   <form onSubmit={handleSignUp}>
   <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input  className="btn btn-primary" type="submit" value="Singup" />
        </div>
      </div>
   </form>
   <p className='mb-4 text-center text-lg'>
    Already have an account? <Link to="/login" className='text-orange-500'>Login</Link>
   </p>
   <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;