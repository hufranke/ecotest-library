import {useState, useEffect} from 'react'
import Header from "./components/Header";
import CatList from './components/CatList';
import ProductList from './components/ProductList'

function App() {
  const [productlists, setProductlists] = useState([])
  const [productListItems, setproductListItems] = useState([])
  const [activeCat, setActiveCat] = useState()

  // Toggle selected productlist
  const setCatFocus = (catlistId) => {
      setActiveCat(catlistId)
      console.log('Set to active cat: '+activeCat)
  }
  /**
   * ROUTES
   */

  // Initial
  useEffect(() => {
    const getProductLists = async () => {
      const productListsDoc = await fetchProductLists();
      setProductlists(productListsDoc)
    }

    getProductLists()
  }, []);

  // Fetch productLists from server
  const fetchProductLists = async () => {
    const res = await fetch('http://localhost:5000/cats/', {})
    const data = await res.json()

    return data
  }
  
  // Fetch products to active productlist from server 
  const fetchProducts = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:5000/cats/${id}/products/`, {})
    const data = await res.json()
    
    // console.log(productListItems)
    return data
  }
  

  // CATEGORIES

  // Delete productList from server
  const deleteCategory = async (id) => {
    const res = await fetch(`http://localhost:5000/cats/${id}`, {
      method: "DELETE"
    })
    if(res.status === 200) {
      setProductlists(productlists.filter((productlist) => productlist._id !== id))
    } else {
      console.log('Error deleting this productlist')
    }
  }

  // Reload categories
  const reloadCats = async () => {
    const data = await fetchProductLists();
    setProductlists(data)
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

    setProductlists([...productlists, data])
  }
  
  // PRODUCTS
  
  // Get products of a specific list
  const getProductListItems = async (id) => {
    const data = await fetchProducts(id);
    setproductListItems(data)
    console.log(productListItems)
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

    setproductListItems([...productListItems, data])
  }

  // Delete specific product
  const deleteProduct = async (catId, prodId) => {
    const res = await fetch(`http://localhost:5000/cats/${catId}/products/${prodId}`, {
      method: "DELETE"
    })
    if(res.status === 200) {
      setproductListItems(productListItems.filter((productListItems) => productListItems._id !== prodId))
    } else {
      console.log(`Error deleting product with id ${prodId}`)
    }
  }
   

  return (
    <div className="container">
      <Header title='Ökotest Listen' className='appHeader'/>
      <div className='appContent'>
        <CatList 
          catlists={productlists} 
          activeCat={activeCat} 
          setCatFocus={setCatFocus} 
          onDelete={deleteCategory} 
          reload={reloadCats} 
          fetchProducts={getProductListItems}
          addCategory={addCategory}
        />
        <ProductList items={productListItems} activeCat={activeCat} deleteProduct={deleteProduct} addProduct={addProduct}/>
      </div>
    </div>
  );
}

export default App;
