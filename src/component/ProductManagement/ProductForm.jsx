import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, serError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    // console.log(name, price, quantity);
    // validation
    if (name.length === 0) {
      serError("please provide a product name");
      return;
    } else if (price.length === 0) {
      serError("Please provide a price");
      return;
    } else if (price < 0) {
      serError("price can not be negative");
      return;
    } else {
      serError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(product);

    handleAddProduct(newProduct);
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
