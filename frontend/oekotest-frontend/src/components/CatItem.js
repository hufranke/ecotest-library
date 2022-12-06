import { FaTimes, FaRegCalendarAlt, FaPen } from 'react-icons/fa'

const CatItem = ({catlistItem, onDelete, fetchProducts, activeCat, setActive}) => {
    return(
        <div>
            <div className={`catItem ${activeCat === catlistItem._id ? 'catItem-active' : ''}`} onClick={() => {
                fetchProducts(catlistItem._id)
                setActive(catlistItem._id)
                }}>
                <div className='catItem-data-container'>
                    <h3>
                        {catlistItem.title}
                    </h3>
                    <FaRegCalendarAlt style={{color: 'rgba(0,0,0,0.45)', fontSize: 'small', marginRight: '4px'}}/>
                    <p>{catlistItem.year > 0 ? catlistItem.year : '?'}</p>
                </div>
                <div className='catItem-icon-container'>
                    <FaPen
                        style={{color: 'rgba(0,0,0,0.45)', cursor: 'pointer', marginRight: '3px'}}
                    />
                    <FaTimes
                        style={{ color: 'red', cursor: 'pointer', marginLeft: '3px' }}
                        onClick={() => {
                            console.log(catlistItem._id)
                            onDelete(catlistItem._id)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatItem;