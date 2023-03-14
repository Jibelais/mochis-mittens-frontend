import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

function Show (props){
    console.log(props.products)
    const{id} = useParams()
    const product = props.products.find((product) => product.id === id)

    return(
        
      <div className = 'show-container bottom-margin'>
        <img className = "show-image" src={product.img} alt={product.name} /><br/>
        <div className ="show-detail">
            <h5>{product.name}</h5>
            <p className='description'>{product.description}</p>
            <a id='buy-button'className='button' href = {product.link} target = "_blank" rel="noreferrer">BUY</a>
            <Link to={`/products/${product.id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>
        </div>
      </div>
    )
}

export default Show