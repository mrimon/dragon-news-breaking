import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, Toaster } from 'sonner';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [nameErr, setNameErr] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameErr('Name should be more than 5 characters')
        }
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // create user
        createUser(email, password)
        .then(() => {
            toast.success('Registered Successfully.')
            updateUser({displayName: name, photoURL: photo })
            .then(()=> {
                navigate('/')
            })
            .catch(err => {
                // console.log(err);
            })
        })
        .catch(err => {
            // console.log(err);
        })
    }
    return (
        <div className="card bg-base-100 p-12 mx-auto  max-w-lg  shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='font-semibold text-2xl md:text-3xl text-center'>Register your account</h1>
                <Toaster></Toaster>
                <div className='border-b-2 border-gray-100 my-6'></div>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label text-primary font-semibold">Your Name</label>
                    <input type="text" name='name' required className="w-full input bg-base-200 mb-3" placeholder="Your Name" />
                    {nameErr && <p className='text-xs text-error'>{nameErr}</p>}
                    <label className="label text-primary font-semibold">Photo URL</label>
                    <input type="text" name='photoURL' required className="w-full input bg-base-200  mb-3" placeholder="Photo URL" />
                    <label className="label text-primary font-semibold">Email</label>
                    <input type="email" name='email' required className="w-full input bg-base-200 mb-3" placeholder="Email" />
                    <label className="label text-primary font-semibold">Password</label>
                    <input type="password" name='password' required className="w-full input bg-base-200 mb-3" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </form>
                <p className='text-center font-semibold pt-3'>Already Have An Account ? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;