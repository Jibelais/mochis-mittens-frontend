import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

function Show (props){
    console.log(props.products)
    const{id} = useParams()
    const product = props.products.find((product) => product.id === id)

    return(
        
      <div className = 'product-container'>
        <img className = "show-image" src={product.img} alt={product.name} /><br/>
        <div className ="show-detail">
            <h2>{product.name}</h2>
            <p><span id="click">Click the links </span><br/> to buy</p>
            <a href = {product.link} target = "_blank" rel="noreferrer">Buy here</a><br/>
            <Link to={`/products/${product.id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>
        </div>
        
        <img id="background-img" src='/img/bottem.png' alt="background" /><br/>
      </div>
    )
}

export default Show