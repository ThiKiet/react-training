import React, { useState } from 'react'

const EditProductForm = (props) => {
  const [product, setProduct] = useState(props.currentProduct)
  
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <label>Name</label> &nbsp;       
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      /> &nbsp; 
      <label>Product price</label> &nbsp; 
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleInputChange}
      />
      &nbsp;
      <button className="btn btn-primary"> Update product </button> &nbsp;
      <button className="btn btn-info" onClick={() => props.setEditing(false)}> Cancel </button>
    </form>
  )
}

export default EditProductForm;