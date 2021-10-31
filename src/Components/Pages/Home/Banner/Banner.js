import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-area">
                <div className="banner-text text-center">
                    <h1 >Make your Travel Easy</h1>
                    <p>We are travel egency . We provide our best service . we reach you fast to your destination</p>
                    <button className='btn btn-danger'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;