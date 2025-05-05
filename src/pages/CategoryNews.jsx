import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    


    useEffect(() => {
        if(id == '0'){
            setCategoryNews(data);
            return
        }else if(id == '1'){
            const filteredNews =  data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews);
            return
        }else {
            const filteredNews = data.filter(news => news.category_id == id)
            setCategoryNews(filteredNews)
        }
    }, [data, id])
    return (
        <div>
            <h1 className='text-xl font-semibold'>Dragon News Home</h1>
            <div className='grid grid-col-1 mt-5 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;