import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import perts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={perts} className="w-1/2 absolute right-5 top-1/2    rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 pr-9'>
                    <h1 className="text-xl text-orange-500 font-bold">About us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
                    <p className="mt-4 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn btn-warning">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;