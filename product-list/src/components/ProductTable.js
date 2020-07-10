import React from 'react'

const ProductTable = (props) => (
  
  <table className="table table-bordered table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price + " VNĐ"}</td>
            <td>
              <button className="btn btn-danger" onClick={() => {props.editRow(product)}} >Edit</button> &nbsp;
              <button className="btn btn-info" onClick={() => props.deleteProduct(product.id)} >Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No product</td>
        </tr>
      )}
    </tbody>
  </table>
)
export default ProductTable;