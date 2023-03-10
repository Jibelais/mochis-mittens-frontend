import {Link} from "react-router-dom"
import {useState} from "react"

function Products(props){
    const [isClicked, setIsClicked] = useState(false)
    const [selected, setSelected] = useState([]) 

    const handleClick = (category) =>{
        let selection = props.products.filter((product) => {
            return (product.category  === category)
        })
        setSelected(selection)
        setIsClicked(true)
    }

    function displayAll () {
        window.location.reload()
    }

    const render = ()=> {
        return selected.map((product)=>(
            <div key = {product.id}>
                <Link to={`/products/${product.id}`}>
                <div>
                    <img src={product.img} alt="img"/>
                    {/* <p>{product.name}</p> */}
                </div>
                </Link>   
            </div>
        ))

    }
    const loaded =()=>{

        return props.products.map((product) =>(
          <div key = {product.id}>
            <Link to={`/products/${product.id}`}>
              <div className= "product" >
                <div>
                    <img src={product.img} alt="img"/>
                    {/* <p>{product.name}</p> */}
                </div>   
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
             <button className= 'button' onClick = {()=>handleClick("tower")} >Cat Towers</button>
             <button className= 'button' onClick = {()=>handleClick("clothing")} >Clothings</button>
             <button className= 'button' onClick = {()=>handleClick("toy")} >Toys</button>
             <button className= 'button' onClick = {displayAll} >ALL</button>
        
            {/* <div className = "product-container" >
                {props.products ? loaded() : loading()}
            </div> */}
            <div className = "product-container">
                {isClicked ? render(): loaded()}
            </div>
               
        </div>
        
    )
}

export default Products