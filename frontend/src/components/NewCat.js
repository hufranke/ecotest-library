import { useState } from "react"

const NewCat = ({addCategory}) => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(year)

        if(!title){
            alert('Bitte notwendige Felder ausfüllen')
            return
        }

        let reqData = {}

        if(!year){
            reqData = {'title': title}
        } else {
            reqData = {'title': title, 'year': year}
        }
        
        addCategory(reqData)

        setTitle('')
        setYear('')
    }

    return(
        <div className="newProduct-container">
            <form className="new-input-form" onSubmit={onSubmit}>
                <div className="new-input-form-heading">
                    <label htmlFor="newTitle">Name*</label>
                    <label htmlFor="newYear">Jahr</label>
                </div>
                <div className="new-input-form-inputs">
                    <input id="newTitle" name="newTitle" type={'text'} placeholder={'Name'} value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <input id="newYear" name="newYear" type={'number'} placeholder={'Jahr'} value={year} onChange={(e) => setYear(e.target.value)}/>
                    <input type='submit' value={"Hinzufügen"} style={{width: '100px'}} />
                </div>
            </form>
        </div>
    )
}

export default NewCat