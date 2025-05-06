import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, Toaster } from 'sonner';

const Login = () => {
    const {login, err, setErr} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(() => {
            toast.success('Successfully Logged In!')
            navigate(`${location.state? location.state : '/'}`)
        })
        .catch(err => {
            // console.log(err);
            setErr(err.code)
        })
    }
    return (

        <div className="card bg-base-100 p-12 mx-auto  max-w-lg  shrink-0 shadow-2xl">
            <div className="card-body">
                <Toaster></Toaster>
                <h1 className='font-semibold text-2xl md:text-4xl text-center'>Login your account</h1>
                <div className='border-b-2 border-gray-100 my-6'></div>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label text-primary font-semibold">Email</label>
                    <input type="email" name='email' className="w-full input bg-base-200 mb-3" placeholder="Email" />
                    <label className="label text-primary font-semibold">Password</label>
                    <input type="password" name='password' className=" w-full input bg-base-200" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>

                    {
                        err && <p className='text-red-500 text-sm'>{err}</p>
                    }
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='text-center font-semibold pt-3'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary hover:underline'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;