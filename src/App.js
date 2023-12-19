// App.js
import React from 'react';
import ProductForm from './ProductForm';
import Dashboard from './dashboard';
import NavBar from './navbar';

const App = () => {
  const handleProductSubmit = (product) => {
    // Handle the submission logic here (e.g., send data to server, update state)
    console.log('Product submitted:', product);
  };

  return (
    <div>
      <NavBar />
      <Dashboard/>
      <h1>Your Product Catalog</h1>
      <ProductForm onSubmit={handleProductSubmit} />
    </div>
  );
};

export default App;
