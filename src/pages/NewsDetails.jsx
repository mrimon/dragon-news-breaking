import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const NewsDetails = () => {
    const { user } =useContext(AuthContext)
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(()=> {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    },[data, id])
    return (
        <div>
            <header className='mb-5'>
                <Header></Header>
            </header>
            {
                user && <div className='flex justify-between w-11/12 mx-auto'>
                    <div></div>
                    <div className='flex items-center gap-2'>
                        <p className='text-secondary'>{user.email}</p>
                        <img className='w-12 bg-secondary  rounded-full' src={user.photoURL} alt="" />
                    </div>
                </div>
            }
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                    <h1 className='font-bold text-xl mb-5'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;