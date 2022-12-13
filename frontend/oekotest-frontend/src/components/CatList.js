import Button from './Button'
import CatItem from './CatItem'
import {FaSyncAlt} from 'react-icons/fa'
import { useState } from 'react'
import NewCat from './NewCat'

const CatList = ({catlists, onDelete, reload, fetchProducts, activeCat, setCatFocus, addCategory}) => {
    const [dispNewCat, setDispNewCat] = useState(false)

    const toggleDispNewCat = () => {
        setDispNewCat(!dispNewCat)
    }

    return(
        <div className='catListContainer'>
            <header className='list-header'>
                <div>
                    <h2 style={{display: 'inline'}}>Kategorien </h2>
                    <FaSyncAlt style={{marginLeft: '10px', cursor: 'pointer'}} onClick={reload}/>
                </div>
                <Button text={'+ Kategorie'} execFunction={toggleDispNewCat}/>
            </header>
            <div>
                {dispNewCat === true ? <NewCat addCategory={addCategory}/> : ''}
            </div>
            <section>
                {catlists.map((catlistItem) => (
                    <CatItem
                        key={catlistItem._id}
                        catlistItem={catlistItem}
                        onDelete={onDelete}
                        fetchProducts={fetchProducts}
                        activeCat={activeCat}
                        setActive={setCatFocus}/>
                    ))}
            </section>
        </div>
    )
}

export default CatList