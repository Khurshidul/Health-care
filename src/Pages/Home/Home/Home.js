import React from 'react';
import Banner from '../Banner/Banner';
import ExpartsDoctors from '../ExpartsDoctors/ExpartsDoctors';
import News from '../News/News';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div className="home-page">
            <div>

            </div>
            <Banner></Banner>
            <Services></Services>
            <News></News>
            <ExpartsDoctors></ExpartsDoctors>
            

        </div>
    );
};

export default Home;