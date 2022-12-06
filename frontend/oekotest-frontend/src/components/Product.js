import {FaPen, FaTimes} from 'react-icons/fa'

const Product = ({item, onDelete}) => {
    return(
        <div className="product-data">
            <div>{item.title}</div>
            <div>{item.provider}</div>
            <div>{item.price ? item.price.$numberDecimal : '-'}</div>
            <div>{item.rating ? item.rating : '-'}</div>
            <div>
                <FaPen
                    style={{color: 'rgba(0,0,0,0.45)', cursor: 'pointer', marginRight: '3px'}}
                />
                <FaTimes
                        style={{ color: 'red', cursor: 'pointer', marginLeft: '3px' }}
                        onClick={() => {
                            console.log(item._id)
                            onDelete(item._catId, item._id)
                        }} />
                </div>
        </div>
    )
}

export default Product;