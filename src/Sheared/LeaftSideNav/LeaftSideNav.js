import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeaftSideNav = () => {
    const [catagoris,setCatagoris]=useState([]);

    useEffect(()=>{
        fetch('https://news-prtal-app-server.vercel.app/news-catagoris')
        .then(res=>res.json())
        .then(data=>setCatagoris(data))
    },[])

    return (
        <div className='mt-5'>
            <h3>All Catagory  0{catagoris.length}</h3>
         <div>
            {
                catagoris.map(catagory=><p key={catagory.id}><Link to={`/catagoris/${catagory.id}`}>{catagory.name}</Link></p>)
            }
         </div>
        </div>
    );
};

export default LeaftSideNav;<h1>this is LeaftSideNav</h1>