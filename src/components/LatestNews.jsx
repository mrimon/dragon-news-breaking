import React from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../Provider/AuthProvider';

const LatestNews = () => {
    
    return (
        <div className='flex items-center gap-5 p-3 bg-base-200 mt-3 mb-8'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
            <Marquee className='flex gap-7 font-semibold mr-8 text-primary' pauseOnHover='true'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;