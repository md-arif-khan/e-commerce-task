import React from 'react';
import dashboard from '../../../assets/dashboard/dashboard.jpg'
const Dashboard = () => {
    return (
        <div className="hero min-h-screen" style={{ background:'black' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Admin Dashboard</h1>
      <p className="mb-5">The dashboard is the front page of the Administration UI. It provides convenient shortcuts for common management tasks, some server information, and Review Board project news updates.</p>
     
    </div>
  </div>
</div>
    );
};

export default Dashboard;