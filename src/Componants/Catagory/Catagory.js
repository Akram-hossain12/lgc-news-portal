import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Sheared/newsSammaryCard/NewsSummaryCard';


const Catagory = () => {
    const allCatagoryNews = useLoaderData();
    return (
        <div>
        {
            allCatagoryNews.map(news => <NewsSummaryCard
            key={news._id}
            news={news}
            ></NewsSummaryCard>)
        }
        </div>
    );
};

export default Catagory;