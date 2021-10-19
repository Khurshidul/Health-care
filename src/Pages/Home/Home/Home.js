import React from 'react';
import Banner from '../Banner/Banner';
import ExpartsDoctors from '../ExpartsDoctors/ExpartsDoctors';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className="home-page">
            <div>

            </div>
            <Banner></Banner>
            <Services></Services>
            <ExpartsDoctors></ExpartsDoctors>

        </div>
    );
};

export default Home;