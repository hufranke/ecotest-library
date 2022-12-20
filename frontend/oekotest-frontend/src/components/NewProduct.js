import { useState } from "react";

const NewProduct = ({addProduct, catId}) => {
    const [title, setTitle] = useState('')
    const [provider, setProvider] = useState('')
    const [price, setPrice] = useState()
    const [rating, setRating] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title && !provider){
            alert('Bitte notwendige Felder ausfüllen')
            return
        }

        addProduct(catId, {
            'title': title, 
            'provider': provider,
            'price': price,
            'rating': rating
        })



        setTitle('')
        setProvider('')
        setPrice('')
        setRating('')
    }

    return(
    <div className="newProduct-container">
        <form className="new-input-form" onSubmit={onSubmit}>
            <div className="new-input-form-heading">
                <label htmlFor="newTitle">Name*</label>
                <label htmlFor="newProvider">Anbieter*</label>
                <label htmlFor="newPrice">Preis</label>
                <label htmlFor="newRating">Bewertung</label>
            </div>
            <div className="new-input-form-inputs">
                <input
                    id="newTitle"
                    name="newTitle" 
                    type={'text'} 
                    placeholder={'Name'} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required />
                <input 
                    id="newProvider" 
                    name="newProvider" 
                    type={'text'} 
                    placeholder={'Anbieter'} 
                    value={provider} 
                    onChange={(e) => setProvider(e.target.value)} 
                    required />
                <input 
                    id="newPrice" 
                    name="newPrice" 
                    type={'text'} 
                    placeholder={'Preis'} 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}/>
                <select 
                    id="newRating" 
                    name="newRating" 
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value={'sehr gut'}>sehr gut</option>
                    <option value={'gut'}>gut</option>
                    <option value={'befriedigend'}>befriedigend</option>
                    <option value={'ausreichend'}>ausreichend</option>
                    <option value={'mangelhaft'}>mangelhaft</option>
                    <option value={'ungenügend'}>ungenügend</option>
                </select>
                <input type='submit' value={"Hinzufügen"} style={{width: '100px'}} />
            </div>
        </form>
    </div>
    )
}

export default NewProduct