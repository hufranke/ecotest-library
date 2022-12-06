import Product from './Product'
import Button from './Button'
import NewProduct from './NewProduct'
import { useState } from 'react'

const ProductList = ({items, deleteProduct}) => {
    const [dispNewProduct, setDispNewProduct] = useState(false);

    return(
        <div style={{marginLeft: '10px'}}>
            <header className='list-header'>
                <h2>Getestete Produkte</h2>
                <Button text={'+ Produkt'}/>
                {dispNewProduct === true ? <NewProduct/> :''}
            </header>
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