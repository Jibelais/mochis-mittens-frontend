import {Link} from "react-router-dom"

function Products(props){
    console.log(props.products)
    const loaded =()=>{

        return props.products.map((product) =>(
          <div  key = {product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                <div>
                    <img src={product.img} alt="img"/>
                </div>   
                <p>{product.name}</p>
              </div>
              
            </Link>
               
          </div>
        ))
     
      }
      const loading = () => {
        return <h1>Loading...</h1>
      }
    return (
        <div>
           {props.products ? loaded() : loading()}
        </div>
    )
}

export default Products