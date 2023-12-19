// ProductForm.js
import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSave, onCancel }) => {
  const [product, setProduct] = useState({
    productName: '',
    productId: '',
    manufacturerName: '',
    productDescription: '',
    productQuantity: '',
    productImage: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'productImage') {
      setProduct({ ...product, [e.target.name]: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
    setProduct({
      productName: '',
      productId: '',
      manufacturerName: '',
      productDescription: '',
      productQuantity: '',
      productImage: null,
    });
  };

  return (
    <div id='productForm'>
    <form className="product-form" onSubmit={handleSubmit}>
    <label class="custom-file-upload">
        Upload Picture:
        <input type="file" name="productImage" onChange={handleChange} />
      </label>
      <label>
        Product Name:
        <input type="text" name="productName" value={product.productName} onChange={handleChange} />
      </label>
      <label>
        Product ID:
        <input type="text" name="productId" value={product.productId} onChange={handleChange} />
      </label>
      <label>
        Manufacturer Name:
        <input type="text" name="manufacturerName" value={product.manufacturerName} onChange={handleChange} />
      </label>
      <label>
        Product Description:
        <textarea name="productDescription" value={product.productDescription} onChange={handleChange} />
      </label>
      <label>
        Product Quantity:
        <input type="number" name="productQuantity" value={product.productQuantity} onChange={handleChange} />
      </label>
      {/* Add more form fields as needed */}
      <div className="button-container">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default ProductForm;
