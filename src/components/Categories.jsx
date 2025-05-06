import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    // console.log(categories);
    return (
        <div>
            <h2 className='text-xl font-bold'>All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-1 items-start'>
                {
                    categories.map(category => <NavLink
                         key={category.id}
                         to={`/category/${category.id}`}
                         className={'py-3 pl-10 font-semibold text-accent bg-base-100 border-0 hover:bg-base-200'}
                         >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;