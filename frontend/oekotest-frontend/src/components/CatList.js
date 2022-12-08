import Button from './Button'
import CatItem from './CatItem'
import {FaSyncAlt} from 'react-icons/fa'

const CatList = ({catlists, onDelete, reload, fetchProducts, activeCat, setCatFocus}) => {
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
                    <CatItem key={catlistItem._id} catlistItem={catlistItem} onDelete={onDelete} fetchProducts={fetchProducts} activeCat={activeCat} setActive={setCatFocus}/>
                    ))}
            </section>
        </div>
    )
}

export default CatList