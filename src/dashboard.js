import React, { useState, useEffect } from 'react';
import bgImg from './eco-factory.png'
import './Dashboard.css';

const Dashboard = () => {
  const [totalStock, setTotalStock] = useState(100); // Replace with your data source
  const [soldStock, setSoldStock] = useState(50); // Replace with your data source

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch new data or update data from your API
      // For simplicity, I'll just increment the sold stock for demonstration purposes
      setSoldStock((prevSold) => prevSold + 1);
    }, 5000); // Update every 5 seconds

    // Cleanup interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="dashboard-container" id='dashboard'>
    <img alt="bgImg" src={bgImg} className="bgImg" />
      <h1>Product Dashboard</h1>
      <div className="dashboard-section">
        <h2>Total Stock</h2>
        <div className="stock-info">{totalStock}</div>
      </div>
      <div className="dashboard-section">
        <h2>Sold Stock</h2>
        <div className="stock-info">{soldStock}</div>
      </div>
    </div>
  );
};

export default Dashboard;
