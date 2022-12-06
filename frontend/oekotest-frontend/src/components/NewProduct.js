const NewProduct = () => {
    return(
    <div>
        <form>
            <label htmlFor="newTitle">Name* </label>
            <input name="newTitle" type={'text'} required/>
            <label htmlFor="newProvider">Anbieter* </label>
            <input name="newProvider" type={'text'} required/>
            <label htmlFor="newPrice">Preis </label>
            <input name="newPrice" type={'text'} />
            <label htmlFor="newRating">Bewertung </label>
            <input name="newRating" type={'text'}/>
        </form>
    </div>
    )
}

export default NewProduct