import React from 'react';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';
import classRoom from '../../assets/class.png';

const Qzone = () => {
    return (
        <div className=' bg-base-200 p-3'>
            <h2 className='font-bold text-xl mb-5'>Qzone</h2>
            <div className='space-y-5 flex flex-col items-center'>
                <img src={swimming} alt="" />
                <img src={playground} alt="" />
                <img src={classRoom} alt="" />
            </div>
        </div>
    );
};

export default Qzone;