import React from 'react';
import About from '../components/Homepage/About';
import Footer from '../components/Footer';
import Banner from '../components/Homepage/Banner';
import Header from '../components/Homepage/Header';


const Homepage = () => {
    return (
        <div className="bg-[#284053]">
            <div className="text-[#fed2e1] bg-black w-[80%] mr-auto ml-auto">

                <Header />
                <Banner />
                <About />
                <Footer />
            </div>
        </div>

    );
}

export default Homepage;
