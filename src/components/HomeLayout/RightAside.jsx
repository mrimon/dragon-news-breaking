import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import Qzone from './Qzone';
import Ad from './Ad';

const RightAside = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <Ad></Ad>
        </div>
    );
};

export default RightAside;