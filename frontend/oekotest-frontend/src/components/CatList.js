import Button from './Button'
import CatItem from './CatItem'
import { useState } from 'react'
import {FaSyncAlt} from 'react-icons/fa'

const CatList = ({catlists, onDelete, reload, fetchProducts}) => {
    const [activeCat, setActiveCat] = useState()

    // Toggle selected productlist
    const setActive = (catlistId) => {
        setActiveCat(catlistId)
    }

    return(
        <div className='catListContainer'>
            <header className='list-header'>
                <div>
                    <h2 style={{display: 'inline'}}>Kategorien </h2>
                    <FaSyncAlt style={{marginLeft: '10px', cursor: 'pointer'}} onClick={reload}/>
                </div>
                <Button text={'+ Kategorie'}/>
            </header>
            <section>
                {catlists.map((catlistItem) => (
                    <CatItem key={catlistItem._id} catlistItem={catlistItem} onDelete={onDelete} fetchProducts={fetchProducts} activeCat={activeCat} setActive={setActive}/>
                    ))}
            </section>
        </div>
    )
}

export default CatList