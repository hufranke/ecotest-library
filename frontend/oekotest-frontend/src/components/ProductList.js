import Product from './Product'
import Button from './Button'
import NewProduct from './NewProduct'
import { useState } from 'react'

const ProductList = ({items, activeCat, deleteProduct, addProduct}) => {
    const [dispNewProduct, setDispNewProduct] = useState(false);

    const toggleDispNewProduct = () => {
        setDispNewProduct(!dispNewProduct)
    }

    return(
        <div style={{marginLeft: '10px'}}>
            <header className='list-header'>
                <div>
                    <h2 style={{display: 'inline'}}>Getestete Produkte</h2>
                </div>
                <Button text={'+ Produkt'} execFunction={toggleDispNewProduct}/>
            </header>
            <div>
                {dispNewProduct === true ? <NewProduct addProduct={addProduct} catId={activeCat}/> :''}
            </div>
            <section className='product-container'>
                {items.length > 0 ? (
                    <div className='product-heading-container'>
                        <div className="product-heading">Name</div>
                        <div className="product-heading">Anbieter</div>
                        <div className="product-heading">Preis</div>
                        <div className="product-heading">Rating</div>
                        <div className='product-heading'></div>
                    </div>
                ) : ''}
                {items.length > 0 ? (items.map((prodItem) => ( // Using () instead of {} is a shorthand for 'return'. Using {} the fct needs the 'return' keyword
                    <Product key={prodItem._id} item={prodItem} onDelete={deleteProduct}/>
                ))) : (
                    <h3>No Products</h3>
                )}
            </section>
        </div>
    )
}

export default ProductList