import { FaRegTrashAlt, FaTimes, FaCheck, FaRegCalendarAlt, FaPen } from 'react-icons/fa'
import { useState } from 'react'

const CatItem = ({catlistItem, onDelete, fetchProducts, activeCat, setActive, editCat}) => {
    const [inEdit, setInEdit] = useState(false)
    const [catTitle, setCatTitle] = useState(catlistItem.title)
    const [catYear, setCatYear] = useState(catlistItem.year)

    const submitChanges = () => {
        const catData = {
            'title': catTitle,
            'year': catYear
        }

        console.log(catData)

        editCat(catlistItem._id, catData)
        toggleEdit()
    }

    const toggleEdit = () => {
        setInEdit(!inEdit)
    }

    return(
        <div>
            <div
                className={`catItem ${activeCat === catlistItem._id ? 'catItem-active' : ''}`}
                onClick={() => {
                    fetchProducts(catlistItem._id)
                    setActive(catlistItem._id)
                }}>
                {/* TD: style whole div according to inEdit-status instead of every element */ }
                <div className='catItem-data-container'>
                    {inEdit === true ?
                        <input style={{display: 'block'}} value={catTitle} onChange={(e) => setCatTitle(e.target.value)} />
                        :
                        <h3>
                            {catTitle}
                        </h3>}
                    <FaRegCalendarAlt
                        style={{color: 'rgba(0,0,0,0.45)', fontSize: 'small', marginRight: '4px'}}/>
                    {inEdit === true ?
                        <input value={catYear} type={'number'} onChange={(e) => setCatYear(e.target.value)} /> 
                        :
                        <p>
                            {catYear > 0 ? catYear : '?'}
                        </p>
                    }
                </div>
                {/* BUTTONS */}
                <div className='catItem-icon-container'>
                    {/* Edit Button */}
                    {inEdit === true ?
                        <FaCheck 
                            className='fa-btn'
                            style={{color: 'green'}}
                            /* TD: send change to backend functionality */
                            onClick={submitChanges}
                            /> 
                        : 
                        <FaPen
                            className='fa-btn'
                            onClick={toggleEdit}
                            /* TD: onclick set focus to input */
                        />
                    }
                    {/* Delete Button */}
                    {inEdit === false ? <FaRegTrashAlt
                        className='fa-btn'
                        onClick={() => {
                            onDelete(catlistItem._id)
                        }}
                    />
                    :
                    <FaTimes className='fa-btn' onClick={toggleEdit} style={{ color: 'red'}}/>}
                </div>
            </div>
        </div>
    )
}

export default CatItem;