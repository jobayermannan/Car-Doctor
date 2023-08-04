import React, { useContext } from 'react';
import  { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {
    const  {googleSignIn}=useContext(AuthContext)

    const handleClick =()=>{
           googleSignIn().then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)
           }).catch((error)=>{
            console.log(error)
           })
    }
    return (
        <div className='text-center mb-4'>
            <div className="divider">OR</div>
            <button onClick={handleClick} className="btn btn-square btn-outline">
                       G
</button>
        </div>
    );
};

export default SocialLogin;