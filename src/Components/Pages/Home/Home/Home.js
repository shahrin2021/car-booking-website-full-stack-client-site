import React from 'react';
import Myorder from '../../Myorder/Myorder';
import OrderReview from '../../OrderReview/OrderReview';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingProcess></WorkingProcess>
            <Services></Services>
            <Gallery></Gallery>
        
           

        </div>
    );
};

export default Home;