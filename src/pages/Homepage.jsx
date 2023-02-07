import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Banner from '../components/Homepage/Banner';
import Header from '../components/Homepage/Header';


const Homepage = () => {
    return (
        <div className="text-[#fed2e1] bg-black max-w-7xl mr-auto ml-auto">
            <Header />
            <Banner />
            <About />
            <Footer />
        </div>
    );
}

export default Homepage;
