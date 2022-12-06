import Button from './Button'
import CatItem from './CatItem'
import { useState } from 'react'

const CatList = ({catlists, onDelete, fetchProducts}) => {
    const [activeCat, setActiveCat] = useState()

    // Toggle selected productlist
    const setActive = (catlistId) => {
        setActiveCat(catlistId)
    }

    return(
        <div className='catListContainer'>
            <header>
                <h2>Tests</h2>
            </header>
            <section>
                {catlists.map((catlistItem) => (
                    <CatItem key={catlistItem._id} catlistItem={catlistItem} onDelete={onDelete} fetchProducts={fetchProducts} activeCat={activeCat} setActive={setActive}/>
                    ))}
            </section>
            <footer>
                <Button text={"add"}/>
            </footer>
        </div>
    )
}

export default CatList