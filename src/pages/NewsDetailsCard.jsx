import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className=' shadow-md rounded-sm p-8'>
            <img className='w-full object-cover' src={news.image_url} alt="" />
            <h1 className='font-bold text-2xl mt-4 mb-2'>{news.title}</h1>
            <p className='mb-8'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='bg-secondary px-3 py-2 text-base-100 flex items-center gap-2 w-[250px]'>
            <FaArrowLeftLong /><span>All news in this category</span></Link>
        </div>
    );
};

export default NewsDetailsCard;