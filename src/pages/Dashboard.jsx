import React from 'react';
import Header from '../components/Homepage/Header';
import Welcome from '../components/Welcome.';


const Dashboard = () => {
    return (
        <div className="text-[#fed2e1] bg-black min-h-screen">
            <Header />
            <Welcome />
        </div>
    );
}

export default Dashboard;
