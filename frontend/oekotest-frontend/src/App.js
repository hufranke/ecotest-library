import {useState, useEffect} from 'react'
import Header from "./components/Header";
import ProductList from './components/ProductList';

function App() {
  const [productlists, setProductlists] = useState([])

  useEffect(() => {
    const getProductLists = async () => {
      const productListsDoc = await fetchProductLists();
      setProductlists(productListsDoc)
    }

    getProductLists()
  }, []);

  // Fetch productLists from server
  const fetchProductLists = async () => {
    const res = await fetch('http://localhost:5000/productlists/', {
      mode: "cors" //enables cors
    })
    const data = await res.json()

    return data
  }

  // Delete productList from server
  const deleteProductList = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:5000/productlists/${id}`, {
      // DEV STATUS: GETS CORS ERRORn
      mode: "cors",
      method: "DELETE"
    })

    if(res.status === 200) {
      setProductlists(productlists.filter((productlist) => productlist._id !== id))
    } else {
      console.log('Error deleting this productlist')
    }
  }

  // Create new list

  return (
    <div className="container">
      <Header title='Ökotest Listen'/>
      <ProductList productlists={productlists} onDelete={deleteProductList}/>
    </div>
  );
}

export default App;
