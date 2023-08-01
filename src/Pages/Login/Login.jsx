import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {singUser} =useContext(AuthContext)
    const handleLogin=event =>{
        event.preventDefault();
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
           
        singUser(email,password).then(result=>{
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
    <h1 className="text-3xl text-center font-bold">Login now!</h1>
   <form onSubmit={handleLogin}>
   <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password"  className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input  className="btn btn-primary" type="submit" value="login" />
        </div>
      </div>
   </form>
   <p className='mb-4 text-center text-lg'>
       Don't have an account? <Link to="/signup" className='text-orange-500' >SignUp</Link>
   </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;