import React, { useState } from 'react'
import ProductTable from './components/ProductTable'
import AddProductForm from './components/AddProductForm'
import EditProductForm from './components/EditProductForm'

const App = () => {
  const productData = [
    { id: 1, name: 'Apple', price: '20000' },
    { id: 2, name: 'Lemon', price: '10000' },
    { id: 3, name: 'Orange', price: '5000' },
    { id: 4, name: 'Banana', price: '20000' },
    { id: 5, name: 'Mango', price: '6000' },
  ]

  const [products, setProducts] = useState(productData)

  const addProduct = (product) => {
    products.id = products.length + 1
    setProducts([...products, product])
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', price: '' }
  const [currentProduct, setCurrentProduct] = useState(initialFormState)
  const editRow = (product) => {
    setEditing(true)
  
    setCurrentProduct({ id: product.id, name: product.name, price: product.price })
  }
  const updateProduct = (id, updateProduct) => {
    setEditing(false)
  
    setProducts(products.map((product) => (product.id === id ? updateProduct : product)))
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="container">
      <h1>Products list</h1> <br/>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {editing ? (
              <div>
                
                <h2>Edit product</h2>
                <EditProductForm
                  setEditing={setEditing}
                  currentProduct={currentProduct}
                  updateProduct={updateProduct}
                />
              </div>
            ) : (
            <div>
              <h2>Add products</h2>
              <AddProductForm addProduct={addProduct} /> <br/>
              <h2>View products</h2>
              <ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;