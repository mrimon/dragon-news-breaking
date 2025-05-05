import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-bold mb-5'>Login with</h1>
            <div className='flex flex-col gap-2'>
                {/* Google */}
                <button className="btn btn-secondary btn-outline">
                    <FaGoogle size={24}></FaGoogle>
                    Login with Google
                </button>

                {/* GitHub */}
                <button className="btn btn-primary  btn-outline">
                    <FaGithub size={24}></FaGithub>
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;