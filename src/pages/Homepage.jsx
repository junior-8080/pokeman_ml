import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Welcome from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Footer />
        </div>
    );
}

export default Homepage;
