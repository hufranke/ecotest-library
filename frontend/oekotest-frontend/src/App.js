import {useState, useEffect} from 'react'
import Header from "./components/Header";
import CatList from './components/CatList';
import ProductList from './components/ProductList'

function App() {
  const [categories, setCategories] = useState([])
  const [categoryItems, setCategoryItems] = useState([])
  const [activeCat, setActiveCat] = useState()

  // Toggle selected category
  const setCatFocus = (catlistId) => {
      setActiveCat(catlistId)
  }
  /**
   * ROUTES
   */

  // Initial
  useEffect(() => {
    const getCategories = async () => {
      const productListsDoc = await fetchCategories();
      setCategories(productListsDoc)
      setCatFocus(productListsDoc[0]._id)
      getCategoryItems(productListsDoc[0]._id)
    }
    
    getCategories()
  }, []);

  // Fetch categories from server
  const fetchCategories = async () => {
    const res = await fetch('http://localhost:5000/cats/', {})
    const data = await res.json()

    return data
  }
  
  // Fetch products to active category from server 
  const fetchProducts = async (id) => {
    const res = await fetch(`http://localhost:5000/cats/${id}/products/`, {})
    const data = await res.json()
    
    return data
  }
  

  // CATEGORIES

  // Delete productList from server
  const deleteCategory = async (id) => {
    const res = await fetch(`http://localhost:5000/cats/${id}`, {
      method: "DELETE"
    })
    if(res.status === 200) {
      setCategories(categories.filter((category) => category._id !== id))
    } else {
      console.log('Error deleting this category')
    }
  }

  // Reload categories
  const reloadCats = async () => {
    const data = await fetchCategories();
    setCategories(data)
  }

  // Add new category
  const addCategory = async (catData) => {
    const res = await fetch(`http://localhost:5000/cats/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catData)
    })

    const data = await res.json

    setCategories([...categories, data])
  }
  
  // PRODUCTS
  
  // Get products of a specific list
  const getCategoryItems = async (id) => {
    const data = await fetchProducts(id);
    setCategoryItems(data)
  }

  // Add new product to a specific list
  const addProduct = async (catId, prodData) => {
    const res = await fetch(`http://localhost:5000/cats/${catId}/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prodData)
    })

    const data = await res.json

    setCategoryItems([...categoryItems, data])
  }

  // Delete specific product
  const deleteProduct = async (catId, prodId) => {
    const res = await fetch(`http://localhost:5000/cats/${catId}/products/${prodId}`, {
      method: "DELETE"
    })
    if(res.status === 200) {
      setCategoryItems(categoryItems.filter((categoryItems) => categoryItems._id !== prodId))
    } else {
      console.log(`Error deleting product with id ${prodId}`)
    }
  }
   

  return (
    <div className="container">
      <Header title='Ökotest Listen' className='appHeader'/>
      <div className='appContent'>
        <CatList 
          catlists={categories} 
          activeCat={activeCat} 
          setCatFocus={setCatFocus} 
          onDelete={deleteCategory} 
          reload={reloadCats} 
          fetchProducts={getCategoryItems}
          addCategory={addCategory}
        />
        <ProductList items={categoryItems} activeCat={activeCat} deleteProduct={deleteProduct} addProduct={addProduct}/>
      </div>
    </div>
  );
}

export default App;
