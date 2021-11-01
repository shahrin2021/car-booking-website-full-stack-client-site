import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='mb-4 text-white'>BIN <sub>Travels</sub></h1>
                        <div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-envelope-minus footer-icon"></i>
                               </div>
                                <div>
                                <p className='email'>shahrinrpi18@gmail.com</p>
                                <p className='email'>shahrin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-phone-alt footer-icon"></i>
                               
                               </div>
                               <div>
                               <p className='email'>+8801796795850</p>
                               <p className='email'>+8801760482215</p>
                               </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-location-point footer-icon"></i>
                               
                               </div>
                               <div>
                               <p className='email'>Saidpur Rangpur , Bangladesh</p>
                              
                               </div>
                            </div>
                        </div>
                        <div className="fallow-us">
                            <h2 className='text-white'>FOLLOW US</h2>
                            <div>
                            <i className="uil uil-facebook footer-icon me-3"></i>
                            <i className="uil uil-instagram-alt footer-icon me-3"></i>
                            <i className="uil uil-twitter footer-icon me-3"></i>
                            <i className="uil uil-linkedin footer-icon"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="location-map">
                        <div className='footer-form mt-4'>
                            <h4 className='text-white mb-4'>Send us your feedback</h4>
                            <form action="" >
                                <label className='text-white' htmlFor=""> Name</label>
                                <div className='footer-form'>
                                    <input className= 'w-75' type="text" />
                                </div>
                                <label className='text-white' htmlFor=""> Phone</label>
                                <div className='footer-form'>
                                    <input className= 'w-75'type="text" />
                                </div>
                                <label className='text-white' htmlFor=""> Massage</label>
                                <div className='footer'>
                                 <textarea className= 'w-75' name="" id="" cols="20" rows="10"></textarea>
                                </div>

                            <div className=" mt-4">
                            <button className='btn btn-success'>Feedback</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;