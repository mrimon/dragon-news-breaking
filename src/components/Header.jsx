import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col '>
            <img className='mt-6 md:mt-12 mb-4 md:mb-5 w-[350px] md:w-[470px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <div className='flex mt-2 justify-center items-center'>
                <span className='text-primary text-xl font-medium'>{format(new Date(), 'eeee')}</span>
                <span className='text-accent text-xl, font-medium'>{format(new Date(), ',  MMMM MM, YYY')}</span>
            </div>
        </div>
    );
};

export default Header;