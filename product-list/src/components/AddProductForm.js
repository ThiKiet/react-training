import React, { useState } from 'react'

const AddProductForm = (props) => {
  const initialFormState = { id: null, name: '', price: '' }
  const [product, setProduct] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!product.name || !product.price) return

        props.addProduct(product)
        setProduct(initialFormState)
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
      /> &nbsp;
      
      <button className="btn btn-primary">Add new product</button>
    </form>
  )
}

export default AddProductForm