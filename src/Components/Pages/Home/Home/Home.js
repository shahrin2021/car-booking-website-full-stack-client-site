import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';


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
            <Testimonial></Testimonial>
           
        
           

        </div>
    );
};

export default Home;