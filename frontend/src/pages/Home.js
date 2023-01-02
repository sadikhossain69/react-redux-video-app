import React from 'react';
import Footer from '../components/footer/Footer';
import VideoGrid from '../components/grid/VideoGrid';
import Navbar from '../components/navbar/Navbar';
import Tags from '../components/tags/Tags';
import Pagination from '../components/ui/Pagination';

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    );
};

export default Home;