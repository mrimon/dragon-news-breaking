import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userPng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'sonner';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut();
        toast.success('Your Successfully LogOut!')
    }
    return (
        <div className='flex items-center justify-between md-10 md:mb-20 '>
            <div className="left">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="logIn-btn flex items-center gap-2">
                <img src={userPng} alt="" />
                {user?
                 <button onClick={handleLogOut} className='btn btn-primary px-10 '>LogOut</button> 
                 : 
                <Link to='/auth/login' className='btn btn-primary px-10 '>Login</Link>}
                
            </div>
        </div>
    );
};

export default Navbar;