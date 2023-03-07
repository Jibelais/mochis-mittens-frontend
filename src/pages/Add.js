
import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Add(props) {
    let navigate = useNavigate()
    const [newProduct, setNewProduct] = useState({
        category: '', 
        img: '',
        link: '', 
        name: '', 
        })

const handleChange = (event) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

const handleSubmit = (event) => {
    event.preventDefault();
    props.createProduct(newProduct);
    setNewProduct({
        category: '', 
        img: '',
        link: '', 
        name: '', 
    });
    navigate("/products")
    console.log(newProduct)
}
    
    return (  
        <section>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    value = {newProduct.category}
                    name = "category"
                    placeholder='category'
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {newProduct.img}
                    name = "img"
                    placeholder='img'
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {newProduct.link}
                    name = "link"
                    placeholder='link'
                    onChange = {handleChange}
                />
                <input
                    type = "text"
                    value = {newProduct.name}
                    name = "name"
                    placeholder='name'
                    onChange = {handleChange}
                />
                <input id="add-button" className='input button' type="submit" value="Add" />
            </form>
        </section>
    );
}

export default Add 