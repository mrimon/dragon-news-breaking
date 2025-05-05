import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className=' '>
            <h2 className='font-bold text-xl'>Find Us</h2>
            <div>
                <div className="join join-vertical w-full mt-3">
                    <button className="btn join-item bg-base-100 justify-start hover:text-white hover:bg-blue-400 ">
                       <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-base-100 justify-start hover:text-white hover:bg-[#1DA1F2]">
                       <FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn join-item bg-base-100 justify-start hover:text-white hover:bg-[#e1306c]">
                        <FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;