import {Routes, Route} from "react-router-dom"
import { useEffect, useState} from "react"
import Products from "../pages/Products"
import {db} from "../firebase_config"
import {collection, getDocs} from 'firebase/firestore'


function Main(props){
    const [products, setProducts] = useState([])
    const productsCollectionRef = collection(db, "products")
       
  useEffect(() => {

         const getProducts = async () => {
            // const res = await fetch (productsCollectionRef)
            // const data = await res.json()
            const data = await getDocs(productsCollectionRef)
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

        }
    getProducts()
   

        
     

    }, [])
    console.log(products)

    return(
        <main>
            <Routes>
                <Route exact path = '/products' element = {<Products products = {products}/>}/>
            </Routes>
        </main>
    )
}

export default Main; 