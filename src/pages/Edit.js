import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'


function Edit(props){
    console.log(props.products)
    const{id} = useParams()
    const product = props.products.find((product) => product.id === id)

    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(product)
    console.log(editForm)
    const handleChange =(event) =>{
        setEditForm((prevState) => ({
             ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProduct(editForm, product.id)
        console.log(editForm)
        navigate("/products")
    }

    const removeProduct = () =>{
        props.deleteProduct(product.id)
        navigate("/products")
    }

    return(
        <section>
            <form onSubmit = {handleSubmit}>
                
                <div>
                    Category:<input
                        type = "text"
                        value = {editForm.category}
                        name = "category"
                        placeholder='category'
                        onChange = {handleChange}
                    />
                </div>
                <input
                    type = "text"
                    value = {editForm.img}
                    name = "img"
                    placeholder='img'
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {editForm.link}
                    name = "link"
                    placeholder='link'
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {editForm.name}
                    name = "name"
                    placeholder='name'
                    onChange = {handleChange}
                />
                <input id="add-button" className='input button' type="submit" value="Update" />
                <button id="delete-button" className="input button" onClick = {()=>removeProduct(product.id)}>Delete</button>

            </form>
        </section>
    )
}

export default Edit