import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

function Show (props){
    console.log(props.products)
    const{id} = useParams()
    const product = props.products.find((product) => product.id === id)

    return(
        
      <div >
        <img id = "image" src={product.img} alt={product.name} /><br/>
        <div id="list">
            <p>{product.name}</p>
            <p><span id="click">Click the links </span><br/> to buy</p>
            <a href = {product.link} target = "_blank" rel="noreferrer">Buy here</a><br/>

        </div>
        <Link to={`/products/${product.id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>

      </div>
    )
}

export default Show