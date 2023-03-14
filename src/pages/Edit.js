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
        <section className='bottom-margin product-page'>
            <form  className = 'edit-container'onSubmit = {handleSubmit}>
                <div>
                    <img className = 'show-image'src={product.img} alt={product.name} /><br/>
                </div>
                <div>
                <div className='edit-content'>
                <label>Category</label><input 
                        className='input'
                        type = "text"
                        value = {editForm.category}
                        name = "category"
                        placeholder='category'
                        onChange = {handleChange}
                    />
                </div>
                <div className='edit-content'>
                    <label>Image</label><input
                    className='input'
                    type = "text"
                    value = {editForm.img}
                    name = "img"
                    placeholder='img'
                    onChange = {handleChange}
                />
                </div>
                <div className='edit-content'>
                  <label>Link</label><input
                    className='input'
                    type = "text"
                    value = {editForm.link}
                    name = "link"
                    placeholder='link'
                    onChange = {handleChange}
                />  
                </div>
                 <div className='edit-content'>
                    <label>Name</label><input
                    className='input'
                    type = "text"
                    value = {editForm.name}
                    name = "name"
                    placeholder='name'
                    onChange = {handleChange}
                />
                 </div>
                 
                <div>
                    <input id="add-button" className='input button' type="submit" value="Update" />
                    <button id="delete-button" className="input button" onClick = {()=>removeProduct(product.id)}>Delete</button>
                    </div>
                </div>
                
            </form>
        </section>
        
    )
}

export default Edit