import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>Products : {products.length}</h2>
      <table>
        <tr>
          <th>No.</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {products.map((product,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
