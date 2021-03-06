import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hook/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle, setIsLoading}= useAuth();
    const history = useHistory()

    const location = useLocation()
    const redirect_uri =location.state?.from || '/home'
    const handleGoogleLogin =() =>{
        signInWithGoogle()
        .then(result=>{
            history.push(redirect_uri)
        }).finally(()=> setIsLoading(false))
    }
    return (
        <div>
            <div className="login-area d-flex justify-content-center align-items-center">
              
                <div className="login-box">
                    <h3 className='mb-3 text-primary'>Please login </h3>
                <div className='text-center  mb-2'>
                <i className="uil uil-google login-icon "></i>
                </div>
                    <button className="btn btn-danger" onClick={handleGoogleLogin}>Singin with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;