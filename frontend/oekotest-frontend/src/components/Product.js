import {FaRegTrashAlt, FaTimes, FaCheck, FaPen } from 'react-icons/fa'
import { useState } from 'react'

const Product = ({item, onDelete}) => {
    const [inEdit, setInEdit] = useState(false);
    
    // Product data
    const [title, setTitle] = useState(item.title)
    const [provider, setProvider] = useState(item.provider)
    const [price, setPrice] = useState(item.price !== undefined ? item.price.$numberDecimal : '')
    const [rating, setRating] = useState(item.rating)

    const toggleInEdit = () => {
        setInEdit(!inEdit)
    }

    const submitChanges = () => {
        //TD: add functionality

        toggleInEdit()
    }

    return(
        <div className="product-data">
            {inEdit === false ?
            <>
            <div>{item.title}</div>
            <div>{item.provider}</div>
            <div>{price ? price : '-'}</div>
            <div>{item.rating ? item.rating : '-'}</div>
            </>
            :
            <>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input value={provider} onChange={(e) => setProvider(e.target.value)}/>
            <input value={price} onChange={(e) => setPrice(e.target.value)}/>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value={'sehr gut'}>sehr gut</option>
                    <option value={'gut'}>gut</option>
                    <option value={'befriedigend'}>befriedigend</option>
                    <option value={'ausreichend'}>ausreichend</option>
                    <option value={'mangelhaft'}>mangelhaft</option>
                    <option value={'ungenügend'}>ungenügend</option>
            </select>
            </>
            }
            {/* Buttons */}
            {inEdit===false ?
            <div>
                <FaPen
                    onClick={toggleInEdit}
                    className='fa-btn'
                />
                <FaRegTrashAlt
                        className='fa-btn'
                        onClick={() => {
                            console.log(item._id)
                            onDelete(item._catId, item._id)
                        }} />
            </div> : 
            <div>
            <FaCheck
                // TD: add submitChanges
                onClick={submitChanges}
                className='fa-btn'
                style={{color: 'green'}}
            />
            <FaTimes
                className='fa-btn'
                style={{ color: 'red'}}
                onClick={toggleInEdit} />
            </div>}
        </div>
    )
}

export default Product;