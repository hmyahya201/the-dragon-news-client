/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsigts from '../../News/EditorsInsigts/EditorsInsigts';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        fetch("https://the-dragon-news-server-hmyahya201.vercel.app/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-3'>
                {
                    categories.map(category=><p
                        key={category.id} 
                    >
                        <Link to={`/category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <EditorsInsigts fromleftNav = {true}/>
        </div>
    );
};

export default LeftNav;